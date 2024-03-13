import React from "react";
import { getGameInfo } from "../actions/getGameInfo";
import { GameInfo } from "@/components/GamesBoard";
import { GenreTags, PlatformTags } from "@/components/GameCard";

const GameInfoPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const response = await getGameInfo(id);
	const genresArray = response?.genres?.split("||");
	const platformsArray = response?.platforms?.split("||");
	const developersArray = response?.developers?.split("||");
	const releaseDate = new Date(response?.released ?? "");

	if (!response) {
		return <div>Game not found</div>;
	}

	return (
		<div className="w-full p-28">
			<div className="flex w-full h-full justify-center items-center">
				<section className="w-[70%] flex justify-center">
					<div>
						<h1 className="xs:text-[20px]">{response.name}</h1>
						<div className="flex flex-wrap">
							<p className="mr-2">Developers: </p>
							{developersArray?.map((dev, index) => (
								<span className="mr-1" key={index}>
									{dev}
									{index < developersArray.length - 1 ? ", " : ""}
								</span>
							))}
						</div>
						<p>Released: {releaseDate.toDateString()}</p>
						<p>
							Rating: {response.rating}/{response.rating_top}
						</p>
						<p>Rating count: {response.ratings_count}</p>
						{response.metacritic && <p>Metacritic: {response.metacritic}</p>}
						<p>Playtime: {response.playtime}</p>
						{response.esrb_rating && <p>ESRB Rating: {response.esrb_rating}</p>}
						{response.website && <p>Website: {response.website}</p>}
						<div className="flex items-center mt-1">
							<p className="mr-2">Genres: </p>{" "}
							<GenreTags
								genres={genresArray ?? []}
								containerStyles="flex flex-wrap"
							/>
						</div>
						<div className="flex items-center mt-2">
							<p className="mr-2">Platforms: </p>
							<PlatformTags
								platforms={platformsArray ?? []}
								containerStyles="flex flex-wrap"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default GameInfoPage;
