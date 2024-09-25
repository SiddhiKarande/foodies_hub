import { IResponses } from "../utils/base-schema";

export const recipeResponses: IResponses = {
	LOGIN_FAILED: {
		statusCode: 401,
		message: "AUTH: LOGIN FAILED",
	},
	SERVER_ERR: {
		statusCode: 500,
		message: "AUTH: SERVER ERR",
	},
};
