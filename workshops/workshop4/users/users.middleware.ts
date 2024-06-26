import { RequestHandler } from "express";
import { ErrorWithStatus, Token } from "../helpers/types";
import { verify } from "jsonwebtoken";

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      throw new ErrorWithStatus("JWT is required", 400);
    }
    const jwt = authorization.split(" ")[1];
    if (!jwt) {
      throw new ErrorWithStatus("malformed JWT", 400);
    }
    if (!process.env.PRIVATE_KEY) {
      throw new ErrorWithStatus("private-key not found", 400);
    }
    console.log(jwt);
    const jwt_data = verify(jwt, process.env.PRIVATE_KEY) as Token;
    console.log(jwt_data);
    req.token = jwt_data;
    next();
  } catch (error) {
    next(error);
  }
};
