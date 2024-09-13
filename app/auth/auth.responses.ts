import { IResponses } from "../utils/base-schema";

export const authResponses: IResponses = {
	LOGIN_FAILED: {
		statusCode: 401,
		message: "AUTH: LOGIN FAILED",
	},
	USER_EXIST: {
		statusCode: 401,
		message: "AUTH: USER ALREADY EXIST",
	},
	NOT_FOUND: {
		statusCode: 404,
		message: "AUTH: USER NOT FOUND",
	},
    SIGNED_UP: {
		statusCode: 200,
		message: "AUTH: SIGN UP SUCCESSFUL",
	},
	UNAUTHORIZED: {
		statusCode: 401,
		message: "AUTH: UNAUTHORIZED",
	},
	SERVER_ERR: {
		statusCode: 500,
		message: "AUTH: SERVER ERR",
	},
};
