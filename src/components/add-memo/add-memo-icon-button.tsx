
import { HiViewGridAdd } from 'react-icons/hi';


export interface AddMemoIconButtonProps {
    onClick: () => void
}

export const AddMemoIconButton = (props: AddMemoIconButtonProps) => {
    return (
        <div 
            className='flex flex-row space-x-2 hover:border-b-2 border-stone-400 w-fit hover:cursor-pointer duration-300'
            onClick={props.onClick}
        >
            <div>
                <HiViewGridAdd size={24} color='#a8a29e' />
            </div>
            <div>
                <span className='text-stone-400'>
                    New Memo?
                </span>
            </div>
        </div>
    );
}