import GamesBoard from "@/components/GamesBoard";

export default function Home({
	searchParams,
}: {
	searchParams?: { limit?: string; offset?: string; name?: string };
}) {
	return (
		<div>
			<section className="my-[50px] px-5">
				<GamesBoard searchParams={searchParams} />
			</section>

			<footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
				<p>© 2021 - Game Catalog</p>
			</footer>
		</div>
	);
}
