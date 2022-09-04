import { useState } from "react";
import {
	Controller, SubmitHandler,
	useForm
} from "react-hook-form";
import { AiOutlineSave } from "react-icons/ai";
import { checkDate } from "../../utils/handle-date";
import { trpc } from "../../utils/trpc";
import { Loading } from "../loading";
import { NotifyToggleInput } from "../notify-toggle-input";
import { AddMemoCategoryInput } from "./add-memo-category-input/add-memo-category-input";
import { AddMemoCloseButton } from "./add-memo-close-button";
import { AddMemoIconButton } from "./add-memo-icon-button";

export interface IAddMemoFormInput {
	title: string;
	reminder: Date;
	description: string;
	notify: boolean;
	category: {
		id?: string,
		name?: string,
		color?: string
	}
}
export interface AddMemoCardProps {
	onAdd:(newMemo: IAddMemoFormInput) => void
}



export const AddMemoCard = (props: AddMemoCardProps) => {
	const [openCard, setOpenCard] = useState<boolean>(false);
	const [notifyCheck, setNotifyCheck] = useState<boolean>(true);
	const [colorSelected, setColorSelected] = useState<string>("#78716c");

	const {
		data: categories,
		isLoading,
		error,
	} = trpc.useQuery(["memo-categories.get-categories"]);

	const { register, handleSubmit, reset, control, formState } = useForm<IAddMemoFormInput>();

	const onSubmit: SubmitHandler<IAddMemoFormInput> = (data) => {
		props.onAdd(data);
	};

	const onCloseCard = () => {
		setOpenCard(false);
		reset();
	};

	if (!openCard) {
		return (
			<div className="flex flex-col justify-center">
				<AddMemoIconButton onClick={() => setOpenCard(true)} />
			</div>
		);
	}

	// TODO show errors
	// console.log('errors', formState.errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className="w-full flex flex-col bg-white rounded-xl py-6 px-8 shadow-lg border-l-4"
				style={{ borderColor: colorSelected }}
			>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<div className="my-2 flex-auto">
							<Controller
								name="category"
								control={control}
								render={(f) => {
									f.field.onChange
									return (
										<AddMemoCategoryInput
											categories={categories ?? []}
											color={colorSelected}
											onColorChange={setColorSelected}
											onChange={f.field.onChange}
										/>
									)
								}}
							/>
						</div>

						<div className="my-2 flex-auto">
							<div className="flex flex-row justify-center">
								<div className="grow">
									<input
										className="font-sans font-medium text-xl focus:outline-0 w-full"
										placeholder="Title"
										required
										type={"text"}
										{...register("title", {
											required: true,
										})}
									/>
								</div>
								<div>
									<NotifyToggleInput
										id="notify-input"
										checked={notifyCheck}
										onChange={() => setNotifyCheck((prev) => !prev)}
										color={colorSelected}
										register={register}
									/>
								</div>
							</div>
						</div>
						<div className="my-auto flex-auto">
							<input
								className="font-sans text-md focus:outline-0 w-full"
								placeholder="Reminder"
								required
								type={"datetime-local"}
								{...register("reminder", {
									required: true,
									validate: checkDate,
								})}
							/>
						</div>

						<div className="block w-full my-2 flex-auto">
							<textarea
								className="font-sans focus:outline-0 w-full text-md text-stone-300 break-all overflow-hidden"
								placeholder="Description"
								style={{
									resize: "none",
								}}
								// wrap={"hard"}
								maxLength={50}
								{...register("description", {
									maxLength: 50,
								})}
							/>
						</div>

						<div className="my-auto flex-auto">
							<div className="flex flex-row items-center justify-end space-x-2 content-center">
								<div>
									<AddMemoCloseButton
										color={colorSelected}
										onClose={onCloseCard}
									/>
								</div>
								<div>
									<button
										className="hover:shadow-xl hover:shadow-stone-600 p-1 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300"
										type="submit"
									>
										<AiOutlineSave size={20} />
									</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</form>
	);
};
