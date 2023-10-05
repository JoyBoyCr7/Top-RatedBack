import mongoose from "../db/connection.js";

const userSchema = new mongoose.Schema({
    userName : {type : String, require : true, unique: true},
    password : {type : String, require : true, }
}, {timestamps : true})

const user = mongoose.model("user", userSchema)

export default user