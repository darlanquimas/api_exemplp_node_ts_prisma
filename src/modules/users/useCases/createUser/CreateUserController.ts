import { Request, Response } from 'express';
import { CreateUserUsecase } from './CreateUserUseCase';
import { container } from 'tsyringe';
import { ApiError } from '@shared/errors/ApiError';

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, userName, password, passwordConfirm } = request.body;
    console.log(passwordConfirm);
    if (name == null || email == null || userName == null || password == null) {
      throw new ApiError('Invalid params', 400);
    }

    if (password !== passwordConfirm) {
      throw new ApiError("Password confirm d'not match", 400);
    }
    const createUserUseCase = container.resolve(CreateUserUsecase);

    const newUser = await createUserUseCase.execute({
      name,
      email,
      userName,
      password,
    });

    return response.status(201).json(newUser);
  }
}
export { CreateUserController };
