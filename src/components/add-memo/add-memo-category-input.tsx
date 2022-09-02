import { ColorInput } from "../color-input";

export interface AddMemoCategoryInputProps {
    color: string;
    onColorChange: (color: string) => void
}

export const AddMemoCategoryInput = (props: AddMemoCategoryInputProps) => {
	return (
		<div className="flex flex-row space-x-4">
			<div className="grow">
				<input
					className={`focus:border-b-2 focus:outline-0 w-full`}
					placeholder="Category"
					type={"text"}
					style={{
						color: props.color,
						borderColor: props.color,
					}}
				/>
			</div>
			<div>
				<ColorInput
					color={props.color}
					onChange={props.onColorChange}
				/>
			</div>
		</div>
	);
};
