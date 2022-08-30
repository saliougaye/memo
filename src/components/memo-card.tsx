import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoNotificationsOffOutline } from "react-icons/io5";

export interface MemoCardProps {
	title: string;
	description: string;
	date: string;
	notify: boolean;
	category?: MemoCardCategory
}

export interface MemoCardCategory {
	name: string;
	color: string;
}

export const MemoCard = (props: MemoCardProps) => {

	return (
		<div 
			className="w-full flex flex-col bg-white rounded-xl py-6 px-8 shadow-lg border-l-4"
			style={{
				borderColor: props.category?.color ?? 'white'
			}}
		>
			
			<div className='my-2 flex-auto'>
			{
				props.category !== undefined
				&&
				<span className='first-letter:capitalize text-ellipsis overflow-hidden' style={{ color: props.category.color }}>{props.category.name}</span>
			}
			</div>
			
			<div className="my-auto flex-auto">
				<span className="font-sans font-medium first-letter:capitalize text-xl text-ellipsis overflow-hidden">
					 {props.title}
				</span>
			</div>
			<div className="my-auto flex-auto">
				<span className="font-sans text-md">{props.date}</span>
			</div>
            
			<div className='block w-full my-2 flex-auto'>
				<span className='font-sans text-md text-stone-300 break-all'>
					{props.description}
				</span>
			</div>

			<div className="my-auto flex-auto">
				<div className='flex flex-row justify-end'>
					{
						props.notify
						?
						<IoIosNotificationsOutline size={20} />
						:
						<IoNotificationsOffOutline size={20} />
					}
				</div>
				
			</div>
		</div>
	);
};
