import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
mongoose.connection
    .on('open', () => console.log('Connected to mongooo'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error));
export default mongoose;
//# sourceMappingURL=connection.js.map