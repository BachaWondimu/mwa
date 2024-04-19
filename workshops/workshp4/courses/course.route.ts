import { router, json } from "express";
import { addCourse } from "./course.controller";

const coursesRouter = router();
// coursesRouter.get("/", getCourses);
coursesRouter.post("/", json, addCourse);
// coursesRouter.get("/:course_id", getCourse);
// coursesRouter.put("/:course_id", json, updateCourse);
// coursesRouter.delete("/:course_id", deleteCourses);

export default coursesRouter;
