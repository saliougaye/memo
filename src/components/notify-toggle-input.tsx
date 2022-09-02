import { IoIosNotificationsOff, IoIosNotificationsOutline } from "react-icons/io";

export interface ToggleInputProps {
	checked: boolean;
	id: string;
    onChange: () => void
    color: string
}

export const NotifyToggleInput = (props: ToggleInputProps) => {
	return (
		<label
			htmlFor={props.id}
			className="inline-flex relative items-end cursor-pointer"
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
                    color: props.color
                }}
            >
				{
                    props.checked
                    ?
                    <IoIosNotificationsOutline size={24} /> 
                    : 
                    <IoIosNotificationsOff size={24} />
                }
			</span>
		</label>
	);
};
