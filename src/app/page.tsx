"use client";
import FilterPanel from "@/components/FilterPanel";
import GamesBoard from "@/components/GamesBoard";
import { useState } from "react";

export interface Filters {
	platforms: string[];
	genres: string[];
}

export default function Home({
	searchParams,
}: {
	searchParams?: { limit?: string; offset?: string; name?: string };
}) {
	const [searchFilters, setSearchFilters] = useState<Filters>({
		platforms: [],
		genres: [],
	});

	return (
		<div>
			<div className="flex flex-row max-w-[1500px] w-full mx-auto">
				<section className="w-[250px]">
					<FilterPanel
						setSearchFilters={setSearchFilters}
						searchFilters={searchFilters}
					/>
				</section>

				<section className="my-[50px] px-5">
					{/* <GamesBoard searchParams={searchParams} /> */}
				</section>
			</div>

			<footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
				<p>© 2021 - Game Catalog</p>
			</footer>
		</div>
	);
}
