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
	return (
		<Link
			className="text-white border w-[300px] h-[300px] border-white rounded p-5 flex flex-col justify-center align-middle cursor-pointer bg-slate-500/50 hover:bg-slate-500/75"
			href={`/${gameInfo._id}`}
		>
			<p className="text-center text-[20px]">{gameInfo.name}</p>
			<GenreTags
				genres={genresArray ?? []}
				containerStyles="mt-2 flex flex-wrap gap-1 justify-center"
			/>
			<PlatformTags
				platforms={platformsArray ?? []}
				containerStyles="mt-2 flex flex-wrap gap-1 justify-center"
			/>
			{platformsArray && platformsArray.length > 3 && (
				<p className="text-white text-center">more...</p>
			)}
		</Link>
	);
};

export default GameCard;
