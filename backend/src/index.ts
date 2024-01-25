import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/users";


mongoose.connect(process.env.MONGO_DB as string);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MONGO DB CONNECTION SUCCESSFULL");
});

connection.on("error", (err) => {
  console.log("CONNECTION ERROR", err);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

 app.use("/api/users",userRoutes)

app.listen(7000, () => {
  console.log("PORT IS LISTING ON 7000");
})