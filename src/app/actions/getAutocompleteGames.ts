import { API_BASE_URL } from "@/environments";

export interface AutocompleteResponse {
	_id: string;
	name: string;
}

export async function getAutocompleteGames(
	name: string
): Promise<AutocompleteResponse[]> {
	try {
		const response = await fetch(
			`${API_BASE_URL}/games/autocomplete?name=${name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log({ error });
		return [];
	}
}
