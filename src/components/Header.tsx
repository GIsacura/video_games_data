"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
	AutocompleteResponse,
	getAutocompleteGames,
} from "@/app/actions/getAutocompleteGames";
import Link from "next/link";
import { GameService } from "@/services/game.service";

const Header = () => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const listRef = useRef<HTMLUListElement | null>(null);
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

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (listRef.current && !listRef.current.contains(event.target as Node)) {
				setAutocompleteGames([]);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [listRef]);

	return (
		<header className="text-black w-full flex flex-col justify-center items-center bg-black py-3">
			<form
				onSubmit={handleSubmit}
				className="flex flex-row xs:w-[90%] sm:w-[80%] max-w-[600px] justify-between align-center"
			>
				<div className="w-[80%] relative">
					<input
						type="text"
						onChange={(event) => {
							setGameName(event.target.value);
							handleAutocomplete(event.target.value);
						}}
						placeholder="Search for a game..."
						value={gameName}
						className="w-full h-[40px] rounded px-2"
					/>

					{autocompleteGames.length > 0 && (
						<ul
							ref={listRef}
							className="absolute top-[110%] bg-slate-50 text-black rounded w-full"
						>
							{autocompleteGames.map((value) => (
								<Link
									key={value._id}
									onClick={() => {
										setAutocompleteGames([]);
										setGameName(value.name);
									}}
									href={`/${value._id}`}
								>
									<li className="hover:bg-orange-400 hover:text-black p-1 rounded">
										{value.name}
									</li>
								</Link>
							))}
						</ul>
					)}
				</div>
				<button
					type="submit"
					className="w-[100px] h-[40px] bg-orange-400 text-black font-bold p-2 rounded ml-2"
				>
					Search
				</button>
			</form>
		</header>
	);
};

export default Header;
