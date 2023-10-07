import mongoose from "../db/connection.js";
import { Document } from "mongoose";
const {Schema, model} = mongoose

interface UserDocument extends Document{
    userName?: string;
    password?: string;
    // Other properties...
  }
const userSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


const User = model<UserDocument>("User", userSchema)

export default User