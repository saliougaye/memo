import { useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoNotificationsOffOutline } from "react-icons/io5";
import Switch from 'react-switch';



export interface AddMemoCardProps {
	
}


export const AddMemoCard = (props: AddMemoCardProps) => {

	const [notifyCheck, setNotifyCheck] = useState<boolean>(true);

	return (
		<div className="w-full flex flex-col bg-white rounded-xl py-6 px-8 shadow-lg border-l-4 border-stone-500">
			<div className="my-2 flex-auto">
				<input
					className="
						focus:border-b-2 
						focus:border-b-stone-500
						focus:outline-0
						w-full
					"
					placeholder="Category"
					type={'text'}
				/>
			</div>

			<div className="my-auto flex-auto">
				<input
					className="
						font-sans 
						font-medium
						text-xl
						focus:border-b-2 
						focus:border-b-stone-500
						focus:outline-0
						w-full
						
					"
					placeholder="Title"
					required
					type={'text'}
				/>
			</div>
			<div className="my-auto flex-auto">
				<input
					className="
						font-sans 
						text-md
						focus:border-b-2 
						focus:border-b-stone-500
						focus:outline-0
						w-full
					"
					placeholder="Reminder"
					required
					type={'datetime-local'}
				/>
			</div>

			<div className="block w-full my-2 flex-auto">
				<textarea
					className="
						font-sans
						focus:border-b-2 
						focus:border-b-stone-500
						focus:outline-0
						w-full
						text-md 
						text-stone-300 
						break-all
						overflow-
					"
					placeholder="Description"
					required
					style={{
						resize: 'none'
					}}
					// rows={4}
					wrap={'hard'}
					maxLength={100}
				/>
			</div>

			{/* Toggle button with icon */}
			<div className="my-auto flex-auto">
			<div className='flex flex-row justify-end'>
				<Switch 
					checked={notifyCheck}
					onChange={setNotifyCheck}
					checkedIcon={<IoIosNotificationsOutline size={16} />}
					uncheckedIcon={<IoNotificationsOffOutline size={16} />}
				/>
				
				
				</div>
			</div>
		</div>
	);
};
