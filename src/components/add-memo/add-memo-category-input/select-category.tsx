import { Category } from "@prisma/client";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SelectCategoryInput } from "./select-category-input";

export const SelectCategory = (props: {
	categories: Category[];
	categorySelected: Category | undefined;
	onNewCategoryClick: () => void;
	onSelectCategory: (category: Category | undefined) => void;
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
};