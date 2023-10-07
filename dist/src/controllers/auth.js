import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
        const user = await User.create(req.body);
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
        if (user) {
            const passwordcheck = await bcrypt.compare(password, user.password);
            if (passwordcheck) {
                const payload = { userName };
                const token = await jwt.sign(payload, process.env.SECRET);
                res.cookie("token", token, { httpOnly: true }).json({ payload, status: "logged in" });
            }
            else {
                res.status(400).json(({ error: "Password does not match" }));
            }
        }
        else {
            res.status(400).json(({ error: "error user does not exist" }));
        }
    }
    catch (error) {
        res.status(400).json(({ error }));
    }
});
router.post("/logout", (req, res) => {
    res.clearCookie("token").json({ response: "You are logged out" });
});
export default router;
//# sourceMappingURL=auth.js.map