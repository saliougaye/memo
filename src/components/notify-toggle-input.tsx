import { UseFormRegister } from "react-hook-form";
import {
	IoIosNotificationsOff,
	IoIosNotificationsOutline
} from "react-icons/io";
import { IAddMemoFormInput } from "./add-memo";

export interface ToggleInputProps {
	checked: boolean;
	id: string;
	onChange: () => void;
	color: string;
	register: UseFormRegister<IAddMemoFormInput>
}

export const NotifyToggleInput = (props: ToggleInputProps) => {
	return (
		<div className="hover:shadow-md hover:shadow-stone-600 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300">
			<label
				htmlFor={props.id}
			>
				<input
					type="checkbox"
					id={props.id}
					className="sr-only peer"
					checked={props.checked}
					{
						...props.register(
							"notify",
							{
								onChange: props.onChange
							}
						)
					}
				/>

				<span
					className="text-sm font-medium"
					style={{
						color: props.color,
					}}
				>
					{props.checked ? (
						<IoIosNotificationsOutline size={24} />
					) : (
						<IoIosNotificationsOff size={24} />
					)}
				</span>
			</label>
		</div>
	);
};
