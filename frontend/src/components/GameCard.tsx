import React from "react";
import { GameInfo } from "./GamesBoard";
import Link from "next/link";

interface GameCardProps {
	gameInfo: GameInfo;
}

const GameCard = ({ gameInfo }: GameCardProps) => {
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
