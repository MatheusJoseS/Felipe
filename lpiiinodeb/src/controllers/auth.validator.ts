import { Response, Request, NextFunction } from "express";
import * as jwt from 'jsonwebtoken'
import { SECRET } from "../services/constants";

export async function validator(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader?.split(' ')
    const bearerToken = bearer && bearer.length > 1 && bearer[1];
    try {
        const token = await jwt.verify(bearerToken || '', SECRET);
        if (token) {
            next();
            return;
        }
        res.status(403).send("User not allowed")
    } catch (err) {
        res.status(403).send("User not allowed")
    }
}