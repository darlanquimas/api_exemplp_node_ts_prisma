import { Request, Response } from 'express';
import { UpdateUserPasswordUseCase } from './UpdateUserPasswordUseCase';
import { container } from 'tsyringe';
import { ApiError } from '@shared/errors/ApiError';

class UpdateUserPasswordController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { oldPassword, newPassword, passwordConfirm } = request.body;
    const { id } = request.user;

    if (
      oldPassword == null ||
      newPassword == null ||
      newPassword !== passwordConfirm
    ) {
      throw new ApiError('Invalid params', 400);
    }

    const updateUserPasswordUseCase = container.resolve(
      UpdateUserPasswordUseCase,
    );

    const userUpdated = await updateUserPasswordUseCase.execute(
      Number(id),
      oldPassword,
      newPassword,
    );

    return response.status(201).json(userUpdated);
  }
}
export { UpdateUserPasswordController };
