import { Router, json } from "express";
import { delete_course_by_id, get_course_by_id, get_courses, post_courses, put_course_by_id } from "./courses.handler";

const coursesRouter = Router();

coursesRouter.get("/", get_courses);
coursesRouter.post("/", json(), post_courses);
coursesRouter.get("/:course_id", get_course_by_id);
coursesRouter.put("/:course_id", json(),put_course_by_id);
coursesRouter.delete("/:course_id", delete_course_by_id);

export default coursesRouter;
