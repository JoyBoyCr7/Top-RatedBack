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
  if(req.cookies.token){
    // if there is a cookie, try to decode it
    const payload = await jwt.verify(req.cookies.token, process.env.SECRET)
    // store the payload in the request
    req.payload = payload;
    // move on to the next piece of middleware
    next();
  } else {
    // if there is no cookie, return an error
    res.status(400).json({ error: "You are not authorized" });
  }
    // try {
    //     const { token = false } = req.cookies;
    //     if (token) {
    //         const payload = await jwt.verify(token, process.env.SECRET);
    //         req.payload = payload
    //         next();
    //     }else {
    //         throw "Not Logged In"
    //     }
    // } catch(error) {
    //     res.status(400).json({error})
    // }
}

export default isLoggedIn