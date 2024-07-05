import  User  from "../models/User";
import { v4 as uid } from 'uuid';

import { RequestHandler } from 'express';


interface Params {
    email: string,
    username: string;
    password: string;
  }
 
type RegisterUser = RequestHandler;

const registerUser: RegisterUser = async (req, res) => {
    const { email, username, password }: Params = req.body;
    await User.create({ id: uid(), email, username, password });
    res.status(201).json({
      message: 'Successfully registered the user.'
    });
};

export default registerUser;
