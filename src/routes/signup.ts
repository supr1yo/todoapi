import { Router } from "express";
import registerUser from "../controller/registerUser";
import { Tspec } from "tspec";
const router = Router();

/** Schema description defined by JSDoc */
interface Signup {
  /** Field description defined by JSDoc */
  email: string,
  username: string;
  password: string;
}

export type ToDoAPI = Tspec.DefineApiSpec<{
  paths: {
    '/signup': {
      post: {

        summary: 'Signup by email, username and password.',
        body: {
          email: string,
          username: string,
          password: string,
        },
        responses: { 200: Signup },
      },
    },
  }
}>;


router.post('/signup', registerUser);


export default router;
