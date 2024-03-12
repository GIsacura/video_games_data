import React from "react";
import { getGameInfo } from "../actions/getGameInfo";

const GameInfo = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const response = await getGameInfo(id);
	console.log({ response });

	return <div></div>;
};

export default GameInfo;
