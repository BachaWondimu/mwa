// import { RequestHandler } from "express";

// import { Course, CourseModel } from "./courses.model";
// import { User } from "../users/users.model";
// import { StandardResponse } from "../helpers/types";

// export const get_courses: RequestHandler<
//   unknown,
//   StandardResponse<Course[]>
// > = async (req, res, next) => {
//   try {
//     return res.status(200).json({ success: true, data: "good" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const post_courses: RequestHandler<
//   unknown,
//   StandardResponse<{ course_id: string }>,
//   Course
// > = async (req, res, next) => {
//   try {
//     return res.status(200).json({ success: true, data: "good" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const get_course_by_id: RequestHandler<
//   { course_id: string },
//   StandardResponse<Course>
// > = async (req, res, next) => {
//   try {
//     return res.status(200).json({ success: true, data: "good" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const put_course_by_id: RequestHandler<
//   { course_id: string },
//   StandardResponse<number>,
//   Course
// > = async (req, res, next) => {
//   try {
//     return res.status(200).json({ success: true, data: "good" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const delete_course_by_id: RequestHandler<
//   { course_id: string },
//   StandardResponse<number>
// > = async (req, res, next) => {
//   try {
//     return res.status(200).json({ success: true, data: "good" });
//   } catch (error) {
//     next(error);
//   }
// };
