import { InferSchemaType, Schema } from "mongoose";

export const fileSchema = new Schema({
  originalname: { type: String, required: true },
  mimetype: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
});

export type File = InferSchemaType<typeof fileSchema>;
