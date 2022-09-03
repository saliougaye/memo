import { useState } from "react";
import { trpc } from "../../utils/trpc";
import { Loading } from "../loading";
import { NotifyToggleInput } from "../notify-toggle-input";
import { AddMemoCategoryInput } from "./add-memo-category-input";
import { AddMemoCloseButton } from "./add-memo-close-button";
import { AddMemoIconButton } from "./add-memo-icon-button";

export interface AddMemoCardProps {}

export const AddMemoCard = (props: AddMemoCardProps) => {
	const [openCard, setOpenCard] = useState<boolean>(false);

	const {
		data: categories,
		isLoading,
		error,
	} = trpc.useQuery(["memo-categories.get-categories"]);

	const [notifyCheck, setNotifyCheck] = useState<boolean>(true);
	const [colorSelected, setColorSelected] = useState<string>("#78716c");

	console.log(categories, isLoading, error);

	if (!openCard) {
		return (
			<div className="flex flex-col justify-center">
				<AddMemoIconButton onClick={() => setOpenCard(true)} />
			</div>
		);
	}

	return (
		<form>
			<div
				className="w-full flex flex-col bg-white rounded-xl py-6 px-8 shadow-lg border-l-4"
				style={{ borderColor: colorSelected }}
			>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<div className="my-2 flex-auto">
							<AddMemoCategoryInput
								categories={categories ?? []}
								color={colorSelected}
								onColorChange={setColorSelected}
							/>
						</div>

						<div className="my-auto flex-auto">
							<input
								className="
						font-sans 
						font-medium
						text-xl
						focus:outline-0
						w-full
						
					"
								placeholder="Title"
								required
								type={"text"}
							/>
						</div>
						<div className="my-auto flex-auto">
							<input
								className="
						font-sans 
						text-md
						focus:outline-0
						w-full
					"
								placeholder="Reminder"
								required
								type={"datetime-local"}
							/>
						</div>

						<div className="block w-full my-2 flex-auto">
							<textarea
								className="
						font-sans
						focus:outline-0
						w-full
						text-md 
						text-stone-300 
						break-all
						overflow-hidden
					"
								placeholder="Description"
								required
								style={{
									resize: "none",
								}}
								// rows={4}
								wrap={"hard"}
								maxLength={100}
							/>
						</div>

						<div className="my-auto flex-auto">
							<div className="flex flex-row items-center justify-end space-x-2 content-center">
								<div className="">
									<NotifyToggleInput
										id="notify-input"
										checked={notifyCheck}
										onChange={() => setNotifyCheck((prev) => !prev)}
										color={colorSelected}
									/>
								</div>
								<div>
									<AddMemoCloseButton
										color={colorSelected}
										onClose={() => setOpenCard(false)}
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</form>
	);
};
