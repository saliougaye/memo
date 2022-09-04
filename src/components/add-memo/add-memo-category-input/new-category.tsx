import { ChangeEvent, useEffect, useState } from "react";
import { VscDiscard } from "react-icons/vsc";
import { ColorInput } from "../../color-input";


export const NewCategory = (props: {
	color: string;
	onColorChange: (color: string) => void;
	onDiscardNewCategory: () => void;
	onChange: (newCategory: { name: string, color: string }) => void
}) => {


    const [newCategory, setNewCategory] = useState<{name: string, color: string}>({
        name: '',
        color: props.color
    });

    useEffect(() => {
        props.onChange(newCategory)
    }, [newCategory])

    const onNameChange = (e: ChangeEvent<HTMLInputElement> | undefined) => {
        setNewCategory((prevState) => ({
            ...prevState,
            name: e?.target.value ?? ""
        }))
    }

    const onColorChange = (color: string) => {
        props.onColorChange(color);

        setNewCategory((prevState) => ({
            ...prevState,
            color: color
        }));

    }

	return (
		<div className="flex flex-row space-x-4 items-center">
			<div
				className="hover:shadow-md hover:shadow-stone-600 p-1 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300"
				onClick={props.onDiscardNewCategory}
			>
				<VscDiscard />
			</div>
			<div className="grow">
				<input
					className={`focus:border-b-2 focus:outline-0 w-full`}
					placeholder="Category"
					type={"text"}
					style={{
						color: props.color,
						borderColor: props.color,
					}}
                    onChange={onNameChange}
				/>
			</div>
			<div>
				<ColorInput color={props.color} onChange={onColorChange} />
			</div>
		</div>
	);
};