import { RequestHandler } from "express";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import { ErrorWithStatus, StandardResponse, Token } from "../helpers/types";
import usersModel, { User } from "./users.model";

export const signin_handler: RequestHandler<
  unknown,
  StandardResponse<string>,
  { email: string; password: string },
  unknown
> = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findOne({ email });
    if (!user) {
      throw new ErrorWithStatus("no user found", 401);
    }
    const match = await compare(password, user.password);
    if (!match) {
      throw new ErrorWithStatus("wrong password", 401);
    }
    if (!process.env.PRIVATE_KEY) {
      throw new ErrorWithStatus("No private key", 401);
    }
    const jwt = sign(
      {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      process.env.PRIVATE_KEY
    );
    res.status(200).json({ success: true, data: jwt });
  } catch (error) {
    next(error);
  }
};
export const signup_handler: RequestHandler<
  unknown,
  StandardResponse<boolean>,
  User,
  unknown
> = async (req, res, next) => {
  try {
    const new_user = req.body;
    const hashed_password = await hash(new_user.password, 10);
    const result = usersModel.create({
      ...new_user,
      password: hashed_password,
    });
    res.status(200).json({ success: true, data: true });
  } catch (error) {
    next(error);
  }
};
