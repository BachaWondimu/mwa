//1. dependencies
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { addCourse } from "./course.controller";

//2. initialization
const app = express();

//3. configuration
app.disable("x-powered-by");

//4. middlewares
app.use(morgan("env"));
app.use(cors());
app.use(helmet());

//5. routers
app.use("courses/", addCourse);

//6. error handler

//7. bootup
app.listen(3000, () => console.log("listening to 3000"));
