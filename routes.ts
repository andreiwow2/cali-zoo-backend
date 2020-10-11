import { Router, Request, Response } from 'express';
import { UserController } from './controllers/userController/userController';
import { ordersController } from './controllers/ordersController/ordersController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('It worked!');
});

router.get('/test', UserController.isAuthenticated);

router.post('/login', UserController.userLogIn);

router.post('/admin/logout', (req, res) => {
    if (req.session)
        req.session.destroy((err) => {
            res.status(200).json({message: "User logged out"});
            if(err)
                console.log('[/admin/logout]', err);
        });
})




router.get('/load/orders', ordersController.loadOrders);

export default router;