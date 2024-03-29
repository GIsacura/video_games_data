import React from "react";
import { getGameInfo } from "../actions/getGameInfo";
import Image from "next/image";
import LeftArrow from "../../assets/icons/svg/arrow-left-big.svg";
import Link from "next/link";

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
		<div className="w-full">
			<Link href="/">
				<Image
					className="mt-3 ml-5 cursor-pointer"
					src={LeftArrow}
					alt=""
					width={50}
					height={50}
				/>
			</Link>
			<div className="w-full px-10">
				<div className="w-full max-w-[1024px] flex h-[400px] my-[60px] mx-auto">
					<div className="w-[60%] h-full bg-slate-500 rounded-l relative">
						<p className="-rotate-45 absolute text-center text-[50px] top-[40%] left-[15%]">
							Image not found
						</p>
					</div>
					<div className="w-[40%] pt-5 px-10">
						<h1 className="xs:text-[20px] md:text-[40px]">{response.name}</h1>
						<div className="bg-[#1f2223] p-3 rounded mb-2">
							<p className="text-[20px] font-thin">
								<span className="font-bold">Platforms:</span>{" "}
								{platformsArray?.join(", ")}
							</p>
							<p className="text-[20px] font-thin">
								<span className="font-bold">Initial Release Date:</span>{" "}
								{releaseDate.toDateString()}
							</p>
						</div>
						<div className="bg-[#1f2223] p-3 rounded mb-2">
							<p className="text-[20px] font-thin">
								<span className="font-bold">Developer:</span>{" "}
								{developersArray?.join(", ")}
							</p>
							<p className="text-[20px] font-thin">
								<span className="font-bold">Publisher:</span>{" "}
								{response.publishers?.split("||").join(", ") ?? "Unknown"}
							</p>
						</div>
						<div className="bg-[#1f2223] p-3 rounded">
							<div className="flex items-center">
								<span className="font-bold text-[20px]">Genre:</span>{" "}
								<div className="flex flex-wrap gap-1 ml-2">
									{genresArray?.map((genre, index) => (
										<span
											className="mr-2 p-1 rounded border border-white bg-[#303436] hover:bg-[#60686c] text-[14px]"
											key={index}
										>
											{genre}
										</span>
									)) ?? "Unknown"}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameInfoPage;
