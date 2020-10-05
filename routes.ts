import { Router, Request, Response } from 'express';
import { userLogIn, userCreation } from './controllers/userController/userController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('It worked!');
});

router.get('/test', userCreation);

router.post('/login', userLogIn);

export default router;