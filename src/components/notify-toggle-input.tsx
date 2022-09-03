import {
	IoIosNotificationsOff,
	IoIosNotificationsOutline
} from "react-icons/io";

export interface ToggleInputProps {
	checked: boolean;
	id: string;
	onChange: () => void;
	color: string;
}

export const NotifyToggleInput = (props: ToggleInputProps) => {
	return (
		<div className="hover:shadow-xl hover:shadow-stone-600 p-1 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300">
			<label
				htmlFor={props.id}
			>
				<input
					type="checkbox"
					id={props.id}
					className="sr-only peer"
					checked={props.checked}
					onChange={props.onChange}
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
