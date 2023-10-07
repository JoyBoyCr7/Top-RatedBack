import jwt from "jsonwebtoken"

import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
      interface Request {
        payload: any; 
      }
    }
  }

async function isLoggedIn(req: Request, res: Response, next:NextFunction){
    try {
        const { token = false } = req.cookies;
        if (token) {
            const payload = await jwt.verify(token, process.env.SECRET);
            req.payload = payload
            next();
        }else {
            throw "Not Logged In"
        }
    } catch(error) {
        res.status(400).json({error})
    }
}

export default isLoggedIn