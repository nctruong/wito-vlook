import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string
    email: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload // (1) like ruby on rails meta propraming
        }
    }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload; // (1)
  } catch (err) {}

  next();
};
