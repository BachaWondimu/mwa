import { Router } from "express";
import multer from "multer";
import { delete_file_by_id, get_files, post_file } from "./files.handlers";
import { get_course_by_id } from "../courses/courses.handler";

const filesRouter = Router({ mergeParams: true });
const upload = multer({ dest: "uploads/" });


filesRouter.get("/", get_files);
filesRouter.post("/", upload.single("lecture_file"), post_file);
filesRouter.get("/:file_id", get_course_by_id);
filesRouter.delete("/:file_id", delete_file_by_id);

export default filesRouter;
