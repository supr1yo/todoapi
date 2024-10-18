
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { statusCode } from '../utils/constants';
import { Model } from 'sequelize';

interface RequestParams {
  username: string;
  password: string;
}

export default async function loginUser(req: Request, res: Response) {
  const { username, password }: RequestParams = req.body;

  if (!username || !password) {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Username or password is missing.' });
  }

  try {
    // Find the user by username 
    const user = await User.findOne({ where: { username } });

  
    if (!user) {
      return res.status(statusCode.NOT_FOUND).json({ message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .json({ message: 'Invalid credentials.' });
    }

    return res.status(statusCode.OK).json({ message: 'Login successful.' });
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong.', error });
  }
}
