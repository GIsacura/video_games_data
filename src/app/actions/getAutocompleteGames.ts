export interface AutocompleteResponse {
	_id: string;
	name: string;
}

export async function getAutocompleteGames(
	name: string
): Promise<AutocompleteResponse[]> {
	try {
		const response = await fetch(
			`http://localhost:3001/games/autocomplete?name=${name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log({ error });
		return [];
	}
}
