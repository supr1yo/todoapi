import { Router } from 'express';
import loginUser from '../controller/login.controller';
const route = Router();

route.post('/login', loginUser);