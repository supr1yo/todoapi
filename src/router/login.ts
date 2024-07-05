import { Router, Request, Response } from "express";
import  User  from "../models/User";
const router = Router();

interface Params {
  username: string;
  password: string;
}

router.post("/", async (req: Request, res: Response) => {
  const { username, password }: Params = req.body;
  const user = await User.create(req.body);
  res.json(user);
});


export default router;
