import express, { Application } from "express";
import { productRouter } from "./src/routes/productRouter.ts";
import database from "./src/config/database.ts";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/warung_kelontong", productRouter);

database.getConnection((err, connection) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully connected : ", connection.threadId);
});

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
