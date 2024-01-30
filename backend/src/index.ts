import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth"
import cookieParser from 'cookie-parser';
import path from 'path';


mongoose.connect(process.env.MONGO_DB as string);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MONGO DB CONNECTION SUCCESSFULL");
});

connection.on("error", (err) => {
  console.log("CONNECTION ERROR", err);
});

const app = express();
app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
}));

app.use(express.static(path.join(__dirname,"../../frontend/dist")));

 app.use("/api/users",userRoutes);
 app.use("/api/auth",authRoutes);

app.listen(7000, () => {
  console.log("PORT IS LISTING ON 7000");
})