
import { validateENV } from "./app/utils/vaildate-env";
import { startServer } from "./app/app";
validateENV();
startServer();
