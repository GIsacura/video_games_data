import React from "react";
import { GameInfo } from "./GamesBoard";
import Link from "next/link";

interface GameCardProps {
	gameInfo: GameInfo;
}

export const GenreTags = ({
	genres,
	containerStyles,
}: {
	genres: string[];
	containerStyles: string;
}) => {
	return (
		<div className={containerStyles}>
			{genres?.map((genre, index) => (
				<span
					key={index}
					className="xs:text-[12px] md:text-[18px] mr-2 border border-white rounded-full py-1 px-2 bg-sky-600/50 hover:bg-white hover:text-black cursor-pointer"
				>
					{genre}
				</span>
			))}
		</div>
	);
};

export const PlatformTags = ({
	platforms,
	containerStyles,
}: {
	platforms: string[];
	containerStyles: string;
}) => {
	const platformColors = {
		PC: "bg-stone-600/50",
		PlayStation: "bg-blue-600/50",
		Xbox: "bg-green-500/50",
		iOS: "bg-orange-500/50",
		Android: "bg-lime-500/50",
		macOS: "bg-cyan-400/50",
		Linux: "bg-yellow-500/50",
		Nintendo: "bg-red-600/50",
		Web: "bg-purple-600/50",
	};

	function getColor(platform: string) {
		for (let key in platformColors) {
			if (platform.includes(key)) {
				return platformColors[key as keyof typeof platformColors];
			}
		}
		return null;
	}

	return (
		<div className={containerStyles}>
			{platforms?.slice(0, 3).map((plat, index) => {
				const color = getColor(plat);
				return (
					<span
						key={index}
						className={`xs:text-[12px] md:text-[18px] mr-2 border border-white rounded-full py-1 px-2 ${color} hover:bg-white hover:text-black cursor-pointer`}
					>
						{plat}
					</span>
				);
			})}
		</div>
	);
};

const GameCard = ({ gameInfo }: GameCardProps) => {
	const genresArray = gameInfo.genres?.split("||");
	const platformsArray = gameInfo.platforms?.split("||");
	const releaseDate = new Date(gameInfo?.released ?? "");
	return (
		<Link
			className="text-white w-[300px] h-[200px] rounded-md p-5 flex justify-between align-middle cursor-pointer hover:shadow-md hover:shadow-black"
			href={`/${gameInfo._id}`}
		>
			<div className="h-full w-[40%] rounded-lg bg-slate-400"></div>
			<div className="w-[50%]">
				<p className="text-center text-[18px]">{gameInfo.name}</p>
				<p className="text-[12px] text-center">{releaseDate.toDateString()}</p>
			</div>
		</Link>
	);
};

export default GameCard;
