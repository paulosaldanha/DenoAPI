import { Application } from "https://deno.land/x/oak/mod.ts";
//import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";

const port = 8000;
const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Server running on port ${port}`);

await app.listen({ port });