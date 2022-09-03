import { Category } from "@prisma/client";
import { ChangeEvent } from "react";

export interface SelectCategoryInputProps {
    categories: Category[];
    categorySelected: Category | undefined;
    onSelectCategory: (category: Category | undefined) => void
}

export const SelectCategoryInput = (props: SelectCategoryInputProps) => {


    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);

        const value = e.target.value;
        let category : Category | undefined = undefined;

        if(value !== "") {
            category = props.categories.filter(el => el.id === value)[0];
        }


        props.onSelectCategory(category);
    }

	return (
		<div>
			<select
				className="
                    text-sm 
                    rounded-lg 
                    block 
                    w-full
                    focus:outline-0
                "
                defaultValue={""}
                onChange={onSelect}
                style={{
                    color: props.categorySelected?.color ?? 'black'
                }}
			>
				<option value={""}>No category</option>
				{
                    props.categories.map((el, i) => (
                        <option 
                            value={el.id}
                            className=""
                            key={i}
                            style={{
                                color: el.color
                            }}
                        >
                            {el.name}
                        </option>
                    ))
                }
			</select>
		</div>
	);
};
