import { Schema, model, InferSchemaType } from "mongoose";
import { lectureSchema } from "../lectures/lectures.model";

const courseSchema = new Schema(
  {
    code: { type: String, required: true },
    title: { type: String, required: true },
    created_by: {
      user_id: Schema.Types.ObjectId,
      fullname: String,
      email: String,
    },
    lectures: [lectureSchema],
  },
  { versionKey: false }
);

export type Course = InferSchemaType<typeof courseSchema>;
export const CourseModel = model<Course>("course", courseSchema);
