import HttpService from "./Http";
import { GameInfo } from "@/components/GamesBoard";

interface Props {
	limit?: string;
	offset?: string;
	name?: string;
	genres?: string;
	platforms?: string;
}

export interface AutocompleteResponse {
	_id: string;
	name: string;
}

export interface GetAllGamesResponse {
	records: GameInfo[];
	pageInfo: {
		id: null;
		totalRecords: number;
	};
}

export class GameService {
	static async getAllGames({
		limit,
		offset,
		name,
		genres,
		platforms,
	}: Props): Promise<GetAllGamesResponse> {
		const queriesArray = [];

		if (limit) queriesArray.push(`limit=${limit}`);
		if (offset) queriesArray.push(`offset=${offset}`);
		if (name) queriesArray.push(`name=${name}`);
		if (genres) queriesArray.push(`genres=${genres}`);
		if (platforms) queriesArray.push(`platforms=${platforms}`);

		const queriesString = queriesArray.join("&");

		try {
			const response = await HttpService.get(`/games?${queriesString}`);
			return response;
		} catch (error) {
			console.log({ error });
			return { records: [], pageInfo: { id: null, totalRecords: 0 } };
		}
	}

	static async getAutocompleteGames(
		name: string
	): Promise<AutocompleteResponse[]> {
		try {
			const response = await HttpService.get(
				`/games/autocomplete?name=${name}`
			);
			return response;
		} catch (error) {
			console.log({ error });
			return [];
		}
	}

	static async getGameInfo(id: string) {
		try {
			const response = await HttpService.get(
				`http://localhost:3001/games/${id}`
			);
			return response;
		} catch (error) {
			console.log({ error });
			return [];
		}
	}
}
