import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

//Routes
import cakesRouter from "./routes/cakesRouter.js";

dotenv.config();

const app = express();
app.use(cors(), json());
app.use(cakesRouter);



app.listen(process.env.PORT, () => console.log(chalk.bold.green(`Server is listening on port ${process.env.PORT}`)));