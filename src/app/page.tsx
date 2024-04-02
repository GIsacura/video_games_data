import FilterPanel from "@/components/FilterPanel";
import GamesBoard from "@/components/GamesBoard";
import Link from "next/link";
import { Suspense } from "react";

import Image from "next/image";

export interface Filters {
	platforms: string[];
	genres: string[];
}

export default function Home({
	searchParams,
}: {
	searchParams?: { limit?: string; offset?: string; name?: string };
}) {
	return (
		<div className="min-h-[100vh - 160px]">
			<div className="w-full mt-10 mb-5">
				<p className="text-center">
					The information provided in this app was obtained from{" "}
					<Link
						className="underline"
						href="https://www.kaggle.com/datasets/jummyegg/rawg-game-dataset/data"
						target="_blank"
					>
						Trung Hoang&apos;s dataset in Kaggle
					</Link>{" "}
					and contains video game information up to the year 2020.
				</p>
			</div>
			<div className="flex flex-row max-w-[1500px] w-full mx-auto">
				{/* <section>
					<Suspense fallback={<div>Loading...</div>}>
						<FilterPanel />
					</Suspense>
				</section> */}
				<section className="my-[50px] mx-auto px-5">
					<GamesBoard searchParams={searchParams} />
				</section>
			</div>
		</div>
	);
}
