import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { GetUserByEmailController } from '@modules/users/useCases/getUserByEmail/GetUserByEmailController';
import { GetUserByIdController } from '@modules/users/useCases/getUserById/GetUserByIdController';
import { LoginController } from '@modules/users/useCases/login/LoginController';
import { UpdateUserPasswordController } from '@modules/users/useCases/updatePassword/UpdateUserPasswordController';
import { authorization } from '@shared/infra/http/middlewares/authorizationMiddleware';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', new CreateUserController().handle);
userRouter.post('/login', new LoginController().handle);
userRouter.get(
  '/email/:email',
  authorization,
  new GetUserByEmailController().handle,
);
userRouter.get('/id/:id', authorization, new GetUserByIdController().handle);
userRouter.patch(
  '/password-update/',
  authorization,
  new UpdateUserPasswordController().handle,
);

export { userRouter };
