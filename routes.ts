import { Router, Request, Response } from 'express';
import { UserController } from './controllers/userController/userController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('It worked!');
});

router.get('/test', UserController.isAuthenticated);

router.post('/login', UserController.userLogIn);

export default router;