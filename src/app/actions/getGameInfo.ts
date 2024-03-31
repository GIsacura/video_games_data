import { GameInfo } from "@/components/GamesBoard";
import { API_BASE_URL } from "@/environments";
import HttpService from "@/services/Http";

export async function getGameInfo(id: string): Promise<GameInfo | undefined> {
	try {
		const response = await HttpService.get(`${API_BASE_URL}/games/${id}`);
		return response;
	} catch (error) {
		console.log({ error });
		return undefined;
	}
}
