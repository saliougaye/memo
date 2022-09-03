import { Category } from "@prisma/client";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscDiscard } from 'react-icons/vsc';
import { ColorInput } from "../color-input";
import { SelectCategoryInput } from "./select-category-input";

export interface AddMemoCategoryInputProps {
	categories: Category[]
    color: string;
    onColorChange: (color: string) => void;

}

const NewCategory = (props: { 
	color: string, 
	onColorChange: (color: string) => void,
	onDiscardNewCategory: () => void 
}) => {
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
}

const SelectCategory = (props: { 
	categories: Category[],
	categorySelected: Category | undefined; 
	onNewCategoryClick: () => void,
	onSelectCategory: (category: Category | undefined) => void 
}) => {

	return (
		<div className="flex flex-row space-x-4">
			<div className="grow">
				<SelectCategoryInput
					categories={props.categories}
					onSelectCategory={props.onSelectCategory}
					categorySelected={props.categorySelected}
				/>
			</div>
			<div>
				<div
					className="hover:shadow-md hover:shadow-stone-600 p-1 rounded shadow-indigo-500/50 hover:cursor-pointer duration-300"
					onClick={props.onNewCategoryClick}
				>
					<IoIosAddCircleOutline />
				</div>
			</div>
		</div>

	);
}

export const AddMemoCategoryInput = (props: AddMemoCategoryInputProps) => {

	const [isNewCategoryView, setIsNewCategoryView] = useState<boolean>(
		props.categories.length === 0
	);

	const [categorySelected, setCategorySelected] = useState<Category>();

	const reset = (isSelectCategoryView: boolean) => {
		setIsNewCategoryView(isSelectCategoryView)
		setCategorySelected(undefined);
		props.onColorChange('#78716c')
	}

	const onSelectCategory = (category: Category | undefined) => {
		if(!category) {
			props.onColorChange('#78716c')
		} else {
			props.onColorChange(category.color);
		}
		setCategorySelected(category);
	}

	return isNewCategoryView ? 
		<NewCategory 
			color={props.color} 
			onColorChange={props.onColorChange}
			onDiscardNewCategory={() => reset(false)} 
		/>
		:
		<SelectCategory 
			categories={props.categories} 
			onNewCategoryClick={() => reset(true)} 
			categorySelected={categorySelected}
			onSelectCategory={onSelectCategory}
		/>
};



