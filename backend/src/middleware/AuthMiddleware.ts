import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../../const";



export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers["authorization"];
    try {
        const token = authorization.split(" ")[1]
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded) {
            req["userId"] = decoded["userId"];
            next();
        }
    } catch (error) {
        res.status(401).send({ error: 'Authentication failed' });
    }
};
