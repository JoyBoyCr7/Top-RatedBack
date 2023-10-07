import jwt from "jsonwebtoken";
async function isLoggedIn(req, res, next) {
    try {
        const { token = false } = req.cookies;
        if (token) {
            const payload = await jwt.verify(token, process.env.SECRET);
            req.payload = payload;
            next();
        }
        else {
            throw "Not Logged In";
        }
    }
    catch (error) {
        res.status(400).json({ error });
    }
}
export default isLoggedIn;
//# sourceMappingURL=isloggedin.js.map