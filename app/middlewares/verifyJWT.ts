import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { error } from "console";

config();

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ status: 401, message: "No token provided" });

  const token = header.split(" ")[1];
  if (!token) return res.status(401).json({ status: 401, message: "No token provided" });

  const secret = process.env.JWT_SECRET;

  jwt.verify(token, secret as string, (err, user) => {
    if (err) return res.status(403).json({ status: 403, message: "Failed to authenticate token" });
    req.body.user = user;
    next();
  })

}