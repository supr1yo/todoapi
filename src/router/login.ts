import { Router, Request, Response } from "express";
const router = Router();

interface Params {
  username: string;
  password: string;
}

router.post("/", (req: Request, res: Response) => {
  const { username, password }: Params = req.body;
  res.json({
    username,
    password
  });
});


export default router;
