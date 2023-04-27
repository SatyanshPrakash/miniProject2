import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/User.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use('/user', userRoutes);

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).
then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))).
catch((error) => console.log(error));
