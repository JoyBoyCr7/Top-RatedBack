import express from "express";
import isLoggedIn from "../../utils/isloggedin.js";
const router = express.Router();
router.use(isLoggedIn);
router.get("/", async (req, res) => {
    try {
        const userName = req.payload.username;
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.get("/:id", async (req, res) => {
    try {
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.post("/", async (req, res) => {
    try {
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.put("/:id", async (req, res) => {
    try {
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.delete("/:id", async (req, res) => {
    try {
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
export default router;
//# sourceMappingURL=show.js.map