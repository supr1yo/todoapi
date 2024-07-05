import  User  from "../models/User";
import { RequestHandler } from 'express';



interface Params {
    email: string,
    username: string;
    password: string;
  }
  
 
type RegisterUser = RequestHandler;

const registerUser: RegisterUser = async (req, res) => {
    const { email, username, password }: Params = req.body;
    const user = await User.create({ email, username, password });
    res.json(user);
};

export default registerUser;
