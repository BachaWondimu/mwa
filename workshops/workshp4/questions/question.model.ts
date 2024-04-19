import { InferSchemaType, Schema } from "mongoose";

export const questionSchema = new Schema({
  question: { type: String, required: true },
  due_date: { type: Number, default: () => Date.now() + 86400000 },
});

export type Question = InferSchemaType<typeof questionSchema>;
