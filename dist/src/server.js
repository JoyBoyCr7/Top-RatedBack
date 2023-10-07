import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import authrouter from "./controllers/auth.js";
dotenv.config();
// connection
const app = express();
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
mongoose.connection
    .on('open', () => console.log('Connected to mongoose'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error));
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.json({ man: "Damn" });
});
app.use("/auth", authrouter);
const port = process.env.PORT;
app.listen(port, () => console.log(`live on port ${port}`));
//# sourceMappingURL=server.js.map