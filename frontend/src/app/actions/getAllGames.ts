import { GameInfo } from "@/components/GamesBoard";
import { API_BASE_URL } from "@/environments";

interface Props {
	limit: string;
	offset: string;
	name?: string;
}

export async function getAllGames({
	limit,
	offset,
	name,
}: Props): Promise<GameInfo[]> {
	const queriesArray = [];

	if (limit) queriesArray.push(`limit=${limit}`);
	if (offset) queriesArray.push(`offset=${offset}`);
	if (name) queriesArray.push(`name=${name}`);

	const queriesString = queriesArray.join("&");

	try {
		const response = await fetch(`${API_BASE_URL}/games?${queriesString}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log({ error });
		return [];
	}
}
