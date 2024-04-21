import { RequestHandler } from "express";
import { StandardResponse } from "../helpers/types";
import { Lecture } from "./lectures.model";
import { CourseModel } from "../courses/courses.model";
import mongoose from "mongoose";

export const get_lectures: RequestHandler<
  { course_id: string },
  StandardResponse<Lecture[]>
> = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const lectures = await CourseModel.findOne(
      { _id: course_id },
      { _id: 0, lectures: 1 }
    );
    return res
      .status(200)
      .json({ success: true, data: lectures?.lectures || [] });
  } catch (error) {
    next(error);
  }
};

export const post_lecture: RequestHandler<
  { course_id: string },
  StandardResponse<string>,
  Lecture
> = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const lecture = req.body;
    const lecture_id = new mongoose.Types.ObjectId();
    const user_id = req.token?._id;

    const result = await CourseModel.updateOne(
      { _id: course_id, "created_by.user_id": user_id },
      {
        $push: {
          lectures: {
            ...lecture,
            _id: lecture_id,
          },
        },
      }
    );
    if (result.matchedCount === 0) {
      throw new Error("Course not found");
    }
    return res.status(200).json({ success: true, data: lecture_id.toString() });
  } catch (error) {
    next(error);
  }
};

export const get_lecture_by_id: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<Lecture>
> = async (req, res, next) => {
  try {
    const { course_id, lecture_id } = req.params;
    const lecture = await CourseModel.findOne(
      { _id: course_id, "lectures._id": lecture_id },
      { _id: 0, "lectures.$": 1 }
    );
    return res
      .status(200)
      .json({ success: true, data: lecture?.lectures[0] || ({} as Lecture) });
  } catch (error) {
    next(error);
  }
};

export const put_lecture_by_id: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<number>,
  Lecture
> = async (req, res, next) => {
  try {
    const { course_id, lecture_id } = req.params;
    const { title, description } = req.body;
    const user_id = req.token?._id;
    const result = await CourseModel.updateOne(
      {
        _id: course_id,
        "lectures._id": lecture_id,
        "created_by.user_id": user_id,
      },
      {
        $set: {
          "lectures.$.title": title,
          "lectures.$.description": description,
        },
      }
    );
    return res.status(200).json({ success: true, data: result.modifiedCount });
  } catch (error) {
    next(error);
  }
};

export const delete_lecture_by_id: RequestHandler<
  { lecture_id: string; course_id: string },
  StandardResponse<number>
> = async (req, res, next) => {
  try {
    const { course_id, lecture_id } = req.params;
    const user_id = req.token?._id;
    const result = await CourseModel.updateOne(
      {
        _id: course_id,
        "lectures._id": lecture_id,
        "created_by.user_id": user_id,
      },
      {
        $pull: {
          lectures: { _id: lecture_id },
        },
      }
    );
    return res.status(200).json({ success: true, data: result.modifiedCount });
  } catch (error) {
    next(error);
  }
};
