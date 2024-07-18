import express, { Application } from "express";
import dotenv from "dotenv";

import { hotelRouter } from "./src/routers/hotelRouter";
import { transactionRouter } from "./src/routers/transactionRouter";

dotenv.config();
const PORT = 8000;

const app: Application = express();
app.use(express.json());
app.use("/hotels", hotelRouter);
app.use("/transactions", transactionRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
