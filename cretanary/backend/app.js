import express from "express";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import "./db/index.js";
import { userValidator } from "./middlewares/validator.js";

//converting into json format
app.use(express.json());

app.use("/api/user", userValidator, userRouter);

app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});
