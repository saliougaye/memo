import { Category } from "@prisma/client";
import { useState } from "react";
import { NewCategory } from "./new-category";
import { SelectCategory } from "./select-category";

export interface AddMemoCategoryInputProps {
	categories: Category[];
	color: string;
	onColorChange: (color: string) => void;
	onChange: (category: { id?: string; name?: string; color?: string }) => void;
}


export const AddMemoCategoryInput = (props: AddMemoCategoryInputProps) => {
	const [isNewCategoryView, setIsNewCategoryView] = useState<boolean>(
		props.categories.length === 0
	);

	const [categorySelected, setCategorySelected] = useState<Category>();

	const reset = (isSelectCategoryView: boolean) => {
		setIsNewCategoryView(isSelectCategoryView);
		setCategorySelected(undefined);
		props.onColorChange("#78716c");
		props.onChange({
			id: undefined,
			name: undefined,
			color: undefined
		})
	};

	const onSelectCategory = (category: Category | undefined) => {
		if (!category) {
			props.onColorChange("#78716c");

			props.onChange({
				id: undefined,
				name: undefined,
				color: undefined
			});
		} else {
			props.onColorChange(category.color);

			props.onChange({
				id: category.id, 
				name: undefined, 
				color: undefined
			});
		}
		setCategorySelected(category);
	};

	return isNewCategoryView ? (
		<NewCategory
			color={props.color}
			onColorChange={props.onColorChange}
			onDiscardNewCategory={() => reset(false)}
			onChange={(newCategory) => {
				props.onChange({
					id: undefined,
					name: newCategory.name,
					color: newCategory.color
				})
			}}
		/>
	) : (
		<SelectCategory
			categories={props.categories}
			onNewCategoryClick={() => reset(true)}
			categorySelected={categorySelected}
			onSelectCategory={onSelectCategory}
		/>
	);
};
