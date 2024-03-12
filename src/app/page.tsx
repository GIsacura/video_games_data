import Header from "@/components/Header";
import Image from "next/image";
import { getAllGames } from "./actions/getAllGames";
import GamesBoard from "@/components/GamesBoard";

export default function Home({
	searchParams,
}: {
	searchParams?: { limit?: string; offset?: string; name?: string };
}) {
	return (
		<div>
			<Header />
			<section className="my-[50px] px-5">
				<GamesBoard searchParams={searchParams} />
			</section>
		</div>
	);
}
