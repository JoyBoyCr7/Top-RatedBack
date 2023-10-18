import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// interface IUser {
//     userName?: string;
//     password?: string;
//   }
const router = express.Router();
router.post("/signup", async (req, res) => {
    try {
        let { userName, password } = req.body;
        password = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const user = await User.create({ userName, password });
        res.json(user);
    }
    catch (error) {
        res.status(400).json(({ error }));
    }
});
router.post("/login", async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        console.log(user);
        if (!user) {
            throw new Error("No user found");
        }
        console.log(password, user);
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            throw new Error("Password does not match");
        }
        const token = jwt.sign({ userName: user.userName }, process.env.SECRET);
        if (process.env.ENVIRONMENT === "production") {
            res.cookie("token", token, {
                httpOnly: true,
                path: "/",
                secure: true,
                sameSite: "none",
                maxAge: 3600000,
            });
        }
        if (process.env.ENVIRONMENT === "dev") {
            res.cookie("token", token, {
                httpOnly: true,
                path: "/",
                domain: "localhost",
                secure: false,
                sameSite: "lax",
                maxAge: 3600000,
            });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
    // try {
    //     const {userName, password} = req.body
    //     const user = await User.findOne({userName})
    //     if (!user.userName){
    //         throw new Error("No user with username found")
    //     }
    //     const passwordCheck = await bcrypt.compare(password, user.password)
    //     if (!passwordCheck){
    //         throw new Error("Password does not match")
    //     }
    //     const token = jwt.sign({userName: user.userName}, process.env.SECRET)
    //     res.cookie("token",token)
    //     res.json(user)
    // } catch(error){
    //     console.log(error)
    //     res.status(400).json({error: error.message})
    // }
});
console;
router.get("/logout", (req, res) => {
    res.clearCookie("token").json({ response: "You are logged out" });
});
// get /cookietest to test our cookie
router.get("/cookietest", (req, res) => {
    res.json(req.cookies);
});
export default router;
//# sourceMappingURL=auth.js.map