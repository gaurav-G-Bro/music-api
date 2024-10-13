import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    httpOnly: true,
    credentials: true,
  })
);

export { app };
