import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from "cors"
import cookieParser from 'cookie-parser'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()
// connection
const app  = express()
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)
mongoose.connection
.on('open', () => console.log('Connected to mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error));




// middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.get('/', (req: Request, res: Response)=>{
    res.json({man:"Damn"})
})

const port = process.env.PORT
app.listen(port, ()=> console.log(`live on port ${port}`))