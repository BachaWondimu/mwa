# CS572-Homework-05-Aggregation
Given the two collections `users` and `courses`. And another sub-schemas of `lectureSchema`, `fileSchema`,  and `questionSchema`.
```typescript
import { Schema, model, InferSchemaType } from 'mongoose';

const userSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    location: { type: [Number], required: false },
    hobbies: { type: [String], required: false }
}, { versionKey: false })

const courseSchema = new Schema({
    code: { type: String, required: true },
    title: { type: String, required: true },
    created_by: {
        user_id: Schema.Types.ObjectId,
        fullname: String,
        email: String
    },
    lectures: [lectureSchema]
}, { versionKey: false });

const lectureSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    files_url: [fileSchema],
    questions: [questionSchema]
});

const fileSchema = new Schema({
    originalname: { type: String, required: true },
    mimetype: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true }
});

const questionSchema = new Schema({
    question: { type: String, required: true },
    due_date: { type: Number, default: ()=> Date.now() + 86400000 },
});

export type User = InferSchemaType<typeof userSchema>;
export type Course = InferSchemaType<typeof courseSchema>;
export type Lecture = InferSchemaType<typeof lectureSchema>;
export type File = InferSchemaType<typeof fileSchema>;
export type Question = InferSchemaType<typeof questionSchema>;

export default model<User>('user', userSchema);
export default model<Course>('course', courseSchema);
```    
<ins>Implement the following methods:</ins>
Build a web server with Express and implement a Restful API for the `courses`, `lectures`, and `questions` entities. Each entity should have the 5 standard routes:
* Add a new item
* Get all items with pagination
* Get one item by ID
* Update an item by ID
* Delete an item by ID


## Technologies used
* dotenv
* [morgan](https://www.npmjs.com/package/morgan)
* express
* mongoose