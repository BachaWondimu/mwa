import {Router, json} from 'express';
import { signin_handler, signup_handler } from './users.handler';

const usersRouter = Router();

usersRouter.post("/signup", json(), signup_handler)
usersRouter.post("/signin", json(), signin_handler)

export default usersRouter;