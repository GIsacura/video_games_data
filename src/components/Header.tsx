"use client";
import React, { useState } from "react";
import BannerImage from "../assets/video_games_wallpaper.webp";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
	AutocompleteResponse,
	getAutocompleteGames,
} from "@/app/actions/getAutocompleteGames";
import Link from "next/link";
import { GameService } from "@/services/game.service";

const Header = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [gameName, setGameName] = useState(
		searchParams.get("name")?.toString()
	);
	const [autocompleteGames, setAutocompleteGames] = useState<
		AutocompleteResponse[]
	>([]);

	const handleSearch = (value: string) => {
		setAutocompleteGames([]);
		const params = new URLSearchParams(searchParams);

		params.set("limit", "50");

		if (value) {
			params.set("name", value);
		} else {
			params.delete("name");
		}

		replace(`/?${params.toString()}`);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAutocompleteGames([]);

		handleSearch(gameName ?? "");
	};

	const handleAutocomplete = async (value: string) => {
		if (!value) {
			setAutocompleteGames([]);
			return;
		}

		const response = await GameService.getAutocompleteGames(value);
		setAutocompleteGames(response);
	};

	return (
		<header
			className="text-black h-[400px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(93deg, rgba(255, 255, 255, 0.5) 100%,  rgba(255, 255, 255, 0.5) 100%), url(${BannerImage.src})`,
			}}
		>
			<h1 className="font-bold text-center xs:text-[40px] text-[70px] w-[90%]">
				Explore a Video Games Database
			</h1>
			<p className="text-center font-[500] text-[20px] w-[90%]">
				You can see information about 400,000+ video games, from their release
				date to who made them.
			</p>

			<form
				onSubmit={handleSubmit}
				className="flex flex-row xs:w-[90%] sm:w-[80%] max-w-[600px] justify-between align-center mt-10"
			>
				<div className="w-[80%] relative">
					<input
						type="text"
						onChange={(event) => {
							setGameName(event.target.value);
							handleAutocomplete(event.target.value);
						}}
						value={gameName}
						className="w-full h-[40px] rounded px-2"
					/>

					{autocompleteGames.length > 0 && (
						<ul className="absolute top-[110%] bg-slate-50 text-black rounded w-full">
							{autocompleteGames.map((value) => (
								<Link
									key={value._id}
									onClick={() => {
										setAutocompleteGames([]);
										setGameName(value.name);
									}}
									href={`/${value._id}`}
								>
									<li className="hover:bg-black hover:text-slate-50 p-1">
										{value.name}
									</li>
								</Link>
							))}
						</ul>
					)}
				</div>
				<button
					type="submit"
					className="w-[100px] h-[40px] bg-black text-white p-2 rounded ml-2"
				>
					Search
				</button>
			</form>
		</header>
	);
};

export default Header;
