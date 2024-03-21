import FilterPanel from "@/components/FilterPanel";
import GamesBoard from "@/components/GamesBoard";

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
		<div>
			<div className="flex flex-row max-w-[1500px] w-full mx-auto">
				<section className="w-[250px]">
					<FilterPanel />
				</section>

				<section className="my-[50px] px-5">
					<GamesBoard searchParams={searchParams} />
				</section>
			</div>

			<footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
				<p>© 2021 - Game Catalog</p>
			</footer>
		</div>
	);
}
