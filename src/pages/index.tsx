import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AddMemoCard, Loading, MemoCard } from "../components/index";
import { getMemoDate } from "../utils/handle-date";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const { data: memos, isLoading, isError, error } = trpc.useQuery(["memo.all"], {
		refetchInterval: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

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

			{isLoading && (
				<div className="container mx-auto flex justify-center">
					<Loading />
				</div>
			)}

			{isError && (
				<div className="container mx-auto">
					<div className="flex justify-center">
						<Image src="/assets/error.svg" width={300} height={300} />
					</div>
					<span className="block font-sans text-center text-xl text-blue-900">
						{error.message}
					</span>
				</div>
			)}

			<div className="grid grid-cols-4 gap-x-4">
				{memos && (
					<>
						{memos.map((memo, index) => (
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
						<AddMemoCard />
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
