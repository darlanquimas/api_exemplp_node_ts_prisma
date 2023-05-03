import { userRouter } from '@modules/users/infra/routes/userRoute';
import { Router } from 'express';

const routes = Router();

routes.use('/user', userRouter);

export default routes;
