import { RequestHandler } from "express";

import { Course, courseModel } from "./course.model";
import { User } from "../user/user.model";
import connect from "../db";

connect()

export const addCourse: RequestHandler<
  unknown,
  { course_id: string },
  {
    code: String;
    title: String;
    created_by: {
      user_id: string;
      fullname: String;
      email: String;
    };
  },
  unknown
> = (req, res, next) => {
  //  const result = await courseModel.create({ req.body.code, req.body.title, req.body.reated_by });
  const title = req.body.title;
  const code = req.body.code;
  const created_by = req.body.created_by;
  const result = courseModel.create({ title, code, created_by });
  return res.status(200).json("great");
};
