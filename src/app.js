import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

//Routes
import cakesRouter from "./routes/cakesRouter.js";
import clientRouter from "./routes/clientsRouter.js"

dotenv.config();

const app = express();
app.use(cors(), json());
app.use(cakesRouter);
app.use(clientRouter);



app.listen(process.env.PORT, () => console.log(chalk.bold.green(`Server is listening on port ${process.env.PORT}`)));