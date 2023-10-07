import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Ronard:Clutch2k@cluster0.d39ko8l.mongodb.net/Toprated?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL);
mongoose.connection
    .on('open', () => console.log('Connected to mongo'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error));
export default mongoose;
//# sourceMappingURL=connection.js.map