import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./shared/container";

import { createConnection } from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

createConnection();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server running now..."));
