import HttpService from "@/services/Http";

export async function getGameInfo(id: string) {
	try {
		const response = await HttpService.get(`http://localhost:3001/games/${id}`);
		return response;
	} catch (error) {
		console.log({ error });
		return [];
	}
}
