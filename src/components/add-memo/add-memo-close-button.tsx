import { AiOutlineDelete } from "react-icons/ai";

export interface AddMemoCloseButtonProps {
    color: string;
    onClose: () => void;
}

export const AddMemoCloseButton = (props: AddMemoCloseButtonProps) => {
	return (
		<div
			className="hover:shadow-xl hover:shadow-stone-600 p-1 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300"
			onClick={props.onClose}
		>
			<AiOutlineDelete
				style={{
					color: props.color,
				}}
				size={20}
			/>
		</div>
	);
};
