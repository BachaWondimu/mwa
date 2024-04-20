//1. dependencies
//third-party
import express from 'express';
import "dotenv/config";
import morgan from 'morgan'


//core-modules

//local-modlues
import connect_to_db from "./helpers/db";
import { myErrorHandler, noRouteHandler } from './helpers/handlers';
import usersRouter from './users/users.router';
import coursesRouter from './courses/courses.router';

//2. init
const app = express();

//3. config
connect_to_db();

//4. middleware
app.use(morgan('dev'))


//5. routes
app.use("/users", usersRouter)
app.use("/courses", coursesRouter)
app.all('*',noRouteHandler)


//6. error-handlers
app.use(myErrorHandler)


//7. bootup
app.listen(3000, ()=>console.log('server is up and running on port 3000'))