import { customerRouter } from '@modules/customer/infra/routes/customerRoute';
import { userRouter } from '@modules/users/infra/routes/userRoute';
import { Router } from 'express';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/customer', customerRouter);

export default routes;
