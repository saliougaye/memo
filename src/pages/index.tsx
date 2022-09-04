import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AddMemoCard, IAddMemoFormInput, Loading, MemoCard } from "../components/index";
import { getMemoDate } from "../utils/handle-date";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const trpcContext = trpc.useContext();
	const trpcQueryMemo = trpc.useQuery(["memo.all"]);

	const trpcAddMemo = trpc.useMutation(["memo.add"], {
		onSuccess: async () => {
			trpcContext.invalidateQueries(["memo.all"]);
		}
	})



	const onAddMemo = async (newMemo: IAddMemoFormInput) => {
		console.log(newMemo.reminder)
		

		try {
			await trpcAddMemo.mutateAsync({
				title: newMemo.title,
				reminder: newMemo.reminder,
				description: newMemo.description,
				notify: newMemo.notify,
				category: newMemo.category
			})
		} catch (error) {
			console.error(error)
		}
	}
	

	return (
		<div className="md:container md:mx-auto my-4">
			<Head>
				<title>Memo</title>
				<meta name="description" content="Memo app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="my-6">
				<h1 className="font-sans text-4xl font-medium">Your memos</h1>
			</div>

			{trpcQueryMemo.isLoading && (
				<div className="container mx-auto flex justify-center">
					<Loading />
				</div>
			)}

			{trpcQueryMemo.isError && (
				<div className="container mx-auto">
					<div className="flex justify-center">
						<Image src="/assets/error.svg" width={300} height={300} />
					</div>
					<span className="block font-sans text-center text-xl text-blue-900">
						{trpcQueryMemo.error.message}
					</span>
				</div>
			)}

			<div className="grid grid-cols-4 gap-x-4">
				{trpcQueryMemo.data && (
					<>
						{trpcQueryMemo.data.map((memo, index) => (
							<MemoCard
								key={index}
								title={memo.title}
								notify={memo.notify}
								date={getMemoDate(memo.reminder)}
								description={memo.description}
								category={
									memo.category !== null
										? {
												name: memo.category.name,
												color: memo.category.color,
										  }
										: undefined
								}
							/>
						))}
						<AddMemoCard 
							onAdd={onAddMemo}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
