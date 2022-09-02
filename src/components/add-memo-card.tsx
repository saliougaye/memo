import { useState } from "react";
import { ColorInput } from "./color-input";
import { NotifyToggleInput } from "./notify-toggle-input";

export interface AddMemoCardProps {}

export const AddMemoCard = (props: AddMemoCardProps) => {
	const [notifyCheck, setNotifyCheck] = useState<boolean>(true);

	const [colorSelected, setColorSelected] = useState<string>("#78716c");

	return (
		<form>
			<div
				className="w-full flex flex-col bg-white rounded-xl py-6 px-8 shadow-lg border-l-4"
				style={{
					borderColor: colorSelected,
				}}
			>
				<div className="my-2 flex-auto">
					<div className="flex flex-row space-x-4">
						<div className="grow">
							<input
								className={`focus:border-b-2 focus:outline-0 w-full`}
								placeholder="Category"
								type={"text"}
								style={{
									color: colorSelected,
									borderColor: colorSelected,
								}}
							/>
						</div>
						<div>
							<ColorInput
								color={colorSelected}
								onChange={(color) => {
									console.log(color);

									setColorSelected(color);
								}}
							/>
						</div>
					</div>
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
					<div className="flex flex-row justify-end">
						<NotifyToggleInput
							id="notify-input"
							checked={notifyCheck}
							onChange={() => setNotifyCheck((prev) => !prev)}
							color={colorSelected}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};
