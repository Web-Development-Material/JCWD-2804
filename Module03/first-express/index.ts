import express, { Application } from "express";

import { usersRouter } from "./src/router/usersRouter.ts";
import { medicineRouter } from "./src/router/medicinesRouter.ts";

const PORT = 8000;
const app: Application = express();

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/medicines", medicineRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
