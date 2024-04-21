import { RequestHandler } from "express";

import { Course, CourseModel } from "./courses.model";
import { StandardResponse } from "../helpers/types";
import mongoose from "mongoose";

export const get_courses: RequestHandler<
  unknown,
  StandardResponse<Course[]>,
  unknown,
  { page: number }
> = async (req, res, next) => {
  try {
    const size = 5;
    const { page } = req.query || 1;
    const skip = (page - 1) * size;
    const result = await CourseModel.find({}).skip(skip).limit(size);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const post_courses: RequestHandler<
  unknown,
  StandardResponse<string>,
  Course
> = async (req, res, next) => {
  try {
    const new_course = req.body;
    console.log(req.token);
    const { _id: user_id, fullname, email } = req.token;
    const result = await CourseModel.create({
      ...new_course,
      created_by: { user_id, fullname, email },
    });

    res.status(200).json({ success: true, data: result._id.toString() });
  } catch (error) {
    next(error);
  }
};

export const get_course_by_id: RequestHandler<
  { course_id: string },
  StandardResponse<Course>
> = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const course = await CourseModel.findOne({
      _id: course_id,
    });
    res.status(200).json({ success: true, data: course || ({} as Course) });
  } catch (error) {
    next(error);
  }
};

export const put_course_by_id: RequestHandler<
  { course_id: string },
  StandardResponse<number>,
  Course
> = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const updated_course = req.body;
    const { _id: user_id } = req.token;
    const result = await CourseModel.updateOne(
      {
        _id: course_id,
        "created_by._id": user_id,
      },
      { $set: updated_course }
    );
    return res.status(200).json({ success: true, data: result.modifiedCount });
  } catch (error) {
    next(error);
  }
};

export const delete_course_by_id: RequestHandler<
  { course_id: string },
  StandardResponse<number>
> = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const { _id: user_id } = req.token;
    const result = await CourseModel.deleteOne({
      _id: course_id,
      "created_by._id": user_id,
    });
    return res.status(200).json({ success: true, data: result.deletedCount });
  } catch (error) {
    next(error);
  }
};
