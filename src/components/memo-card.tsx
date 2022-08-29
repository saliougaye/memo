export interface MemoCardProps {
	title: string;
	date: string;
	notify: boolean;
}

export const MemoCard = (props: MemoCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-xl p-4 shadow-lg ">
			<div className="my-auto">
				<span className="font-sans text-lg font-medium">
					 {props.title}
				</span>
			</div>
			<div className="my-auto">
				<span>{props.date}</span>
			</div>
            {
                props.notify
                &&
                <div className="my-auto">
				    <span>Notify</span>
			    </div>
            }
			
		</div>
	);
};
