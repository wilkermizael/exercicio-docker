import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
//import { loadEnv } from "./config.ts/env";
//import errorHanderMiddleware from "./middleware/error-handling-middleware";
//import { solarRouter } from "./routers/solar-router";


//loadEnv()
const app = express();

app.use(json()); // body-parser
// app.use(cors())

app.get("/health", (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});
//app.use("/solar", solarRouter);
//app.use(errorHanderMiddleware);

export default app;
