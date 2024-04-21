import { InferSchemaType, Schema } from "mongoose";

import { File, fileSchema } from "../files/files.schema";
import { questionSchema } from "../questions/questions.schema";

export const lectureSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  files_url: [fileSchema],
  questions: [questionSchema],
});

export type Lecture = InferSchemaType<typeof lectureSchema>;
