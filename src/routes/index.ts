import signup from './signup';
import { Router } from 'express';
const router = Router();

router.use('/', signup);


export default router;