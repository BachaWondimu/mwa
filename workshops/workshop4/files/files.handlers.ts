import { RequestHandler } from "express";
import { StandardResponse } from "../helpers/types";
import { File } from "../files/files.schema";
import { CourseModel } from "../courses/courses.model";

export const get_files: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<File[]>
> = async (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: "" || [] });
  } catch (error) {
    next(error);
  }
};

export const post_file: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<string>
> = async (req, res, next) => {
  try {
    const { course_id, lecture_id } = req.params;
    const user_id = req.token?._id;
    console.log(req.file);
    res.status(200).json({ success: true, data: "good" });
  } catch (error) {
    next(error);
  }
};

export const get_file_by_id: RequestHandler<{
  course_id: string;
  lecture_id: string;
  file_id: string;
}> = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: "" });
  } catch (error) {
    next(error);
  }
};

export const delete_file_by_id: RequestHandler<
  { course_id: string; lecture_id: string; file_id: string },
  StandardResponse<string>,
  File
> = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: "file_id.toString()" });
  } catch (error) {
    next(error);
  }
};
