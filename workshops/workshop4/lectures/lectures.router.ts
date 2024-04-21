import express from "express";
import { json } from "body-parser";
import { Router } from "express";

import { get_lecture_by_id, get_lectures, post_lecture } from "./lectures.handler";


const lecturesRouter = Router({ mergeParams: true});
lecturesRouter.get("/", get_lectures);
lecturesRouter.post("/", json(), post_lecture);
lecturesRouter.get("/:lecture_id", get_lecture_by_id);
lecturesRouter.put("/:lecture_id", json(), post_lecture);
lecturesRouter.delete("/:lecture_id", post_lecture);

export default lecturesRouter;

