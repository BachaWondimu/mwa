import { InferSchemaType, Schema } from "mongoose";

import { File, fileSchema } from "../files/file.model";
import { questionSchema } from "../questions/question.model";

export const lectureSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  files_url: [fileSchema],
  questions: [questionSchema],
});

export type Lecture = InferSchemaType<typeof lectureSchema>;
