"use client";
import { Filters } from "@/app/page";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import DownArrow from "../assets/icons/svg/down-arrow.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface FilterPanelProps {
	setSearchFilters: Dispatch<SetStateAction<Filters>>;
	searchFilters: Filters;
}

const Platforms = ({ setSearchFilters, searchFilters }: FilterPanelProps) => {
	const { platforms } = searchFilters;
	const [platformsOpen, setPlatformsOpen] = useState<boolean>(false);
	const handleOpenPlatforms = () => {
		setPlatformsOpen(!platformsOpen);
	};

	const platformsArray = [
		{ title: "PlayStation 5" },
		{ title: "Xbox Series S/X" },
		{ title: "Nintendo Switch" },
		{ title: "PC" },
		{ title: "iOs" },
		{ title: "Android" },
		{ title: "Xbox One" },
		{ title: "PlayStation 4" },
		{ title: "Nintendo 3DS" },
		{ title: "Nintendo DS" },
		{ title: "Nintendo DSi" },
		{ title: "macOS" },
		{ title: "Linux" },
		{ title: "Xbox 360" },
		{ title: "Xbox" },
		{ title: "PlayStation 3" },
		{ title: "PlayStation 2" },
		{ title: "PlayStation" },
		{ title: "PS Vita" },
		{ title: "PSP" },
		{ title: "Wii U" },
		{ title: "Wii" },
		{ title: "GameCube" },
		{ title: "Nintendo 64" },
		{ title: "Game Boy Advance" },
		{ title: "Game Boy Color" },
		{ title: "Game Boy" },
		{ title: "SNES" },
		{ title: "NES" },
		{ title: "Classic Macintosh" },
		{ title: "Apple II" },
		{ title: "Commodore / Amiga" },
		{ title: "Atari 7800" },
		{ title: "Atari 5200" },
		{ title: "Atari 2600" },
		{ title: "Atari Flashback" },
		{ title: "Atari 8-bit" },
		{ title: "Atari ST" },
		{ title: "Atari Lynx" },
		{ title: "Atari XEGS" },
		{ title: "Genesis" },
		{ title: "SEGA Saturn" },
		{ title: "SEGA CD" },
		{ title: "SEGA 32X" },
		{ title: "SEGA Master System" },
		{ title: "Dreamcast" },
		{ title: "3DO" },
		{ title: "Jaguar" },
		{ title: "Game Gear" },
		{ title: "Neo Geo" },
		{ title: "Web" },
	];

	return (
		<section className="w-full">
			<div className="flex flex-row justify-between items-center">
				<p className="font-bold">Platforms</p>
				<Image
					width={20}
					className={`cursor-pointer transition duration-200 ease-linear ${
						platformsOpen ? "transform rotate-180" : ""
					}`}
					src={DownArrow}
					alt={"arrow-head"}
					onClick={handleOpenPlatforms}
				/>
			</div>

			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					platformsOpen ? "max-h-[2500px]" : "max-h-[220px]"
				} my-3`}
			>
				{platformsArray.map((platform, index) => (
					<div
						key={index}
						className={`flex items-center transition-all duration-500 ease-in-out ${
							platformsOpen ? "my-5" : "my-3"
						}`}
					>
						<input
							type="checkbox"
							className="form-checkbox h-6 w-6 rounded-lg bg-transparent"
							checked={platforms.includes(platform.title)}
							onChange={(e) => {
								if (e.target.checked) {
									setSearchFilters((prev) => ({
										...prev,
										platforms: [...prev.platforms, platform.title],
									}));
								} else {
									setSearchFilters((prev) => ({
										...prev,
										platforms: prev.platforms.filter(
											(p) => p !== platform.title
										),
									}));
								}
							}}
						/>
						<label className="ml-2">{platform.title}</label>
					</div>
				))}
			</div>

			<p
				className={`cursor-pointer text-[14px] font-bold ${
					platformsOpen ? "mt-0" : "mt-5"
				}`}
				onClick={handleOpenPlatforms}
			>
				{platformsOpen ? "- Show less" : "+ Show more"}
			</p>
		</section>
	);
};

const Genres = ({ setSearchFilters, searchFilters }: FilterPanelProps) => {
	const [genresOpen, setGenresOpen] = useState<boolean>(false);
	const { genres } = searchFilters;

	const handleOpenGenres = () => {
		setGenresOpen(!genresOpen);
	};

	const genreArray = [
		{ title: "Action" },
		{ title: "Indie" },
		{ title: "Adventure" },
		{ title: "RPG" },
		{ title: "Strategy" },
		{ title: "Shooter" },
		{ title: "Casual" },
		{ title: "Simulation" },
		{ title: "Puzzle" },
		{ title: "Arcade" },
		{ title: "Platformer" },
		{ title: "Racing" },
		{ title: "Massively Multiplayer" },
		{ title: "Sports" },
		{ title: "Fighting" },
		{ title: "Family" },
		{ title: "Board Games" },
		{ title: "Educational" },
		{ title: "Card" },
	];

	return (
		<section className="w-full">
			<div className="flex flex-row justify-between items-center">
				<p className="font-bold">Genres</p>
				<Image
					width={20}
					className={`cursor-pointer transition duration-200 ease-linear ${
						genresOpen ? "transform rotate-180" : ""
					}`}
					src={DownArrow}
					alt={"arrow-head"}
					onClick={handleOpenGenres}
				/>
			</div>

			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					genresOpen ? "max-h-[2500px]" : "max-h-[220px]"
				} my-3`}
			>
				{genreArray.map((genre, index) => (
					<div
						key={index}
						className={`flex items-center transition-all duration-500 ease-in-out ${
							genresOpen ? "my-5" : "my-3"
						}`}
					>
						<input
							type="checkbox"
							className="form-checkbox h-6 w-6 rounded-lg"
							checked={genres.includes(genre.title)}
							onChange={(e) => {
								if (e.target.checked) {
									setSearchFilters((prev) => ({
										...prev,
										genres: [...prev.genres, genre.title],
									}));
								} else {
									setSearchFilters((prev) => ({
										...prev,
										genres: prev.genres.filter((p) => p !== genre.title),
									}));
								}
							}}
						/>
						<label className="ml-2">{genre.title}</label>
					</div>
				))}
			</div>
			<p
				className={`cursor-pointer text-[14px] font-bold ${
					genresOpen ? "mt-0" : "mt-5"
				}`}
				onClick={handleOpenGenres}
			>
				{genresOpen ? "- Show less" : "+ Show more"}
			</p>
		</section>
	);
};

const FilterPanel = ({ setSearchFilters, searchFilters }: FilterPanelProps) => {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const { replace } = useRouter();
	const { platforms, genres } = searchFilters;

	useEffect(() => {
		if (params.get("platforms")) {
			setSearchFilters((prev) => ({
				...prev,
				platforms: params.get("platforms")?.split("%") || [],
			}));
		}

		if (params.get("genres")) {
			setSearchFilters((prev) => ({
				...prev,
				genres: params.get("genres")?.split("%") || [],
			}));
		}
	}, []);

	useEffect(() => {
		handleSearchPlatforms();
	}, [searchFilters]);

	const handleSearchPlatforms = () => {
		const params = new URLSearchParams(searchParams);

		if (platforms.length > 0) {
			params.set("platforms", platforms.join("%"));
		} else {
			params.delete("platforms");
		}

		if (genres.length > 0) {
			params.set("genres", genres.join("%"));
		} else {
			params.delete("genres");
		}

		replace(`/?${params.toString()}`);
	};

	return (
		<div className="w-full p-5">
			<p className="">Filters</p>
			<div className="border-[#42474a] border-[1px] my-4"></div>

			<Platforms
				setSearchFilters={setSearchFilters}
				searchFilters={searchFilters}
			/>

			<div className="border-[#42474a] border-[1px] my-4"></div>

			<Genres
				setSearchFilters={setSearchFilters}
				searchFilters={searchFilters}
			/>

			<div className="border-[#42474a] border-[1px] my-4"></div>
		</div>
	);
};

export default FilterPanel;
