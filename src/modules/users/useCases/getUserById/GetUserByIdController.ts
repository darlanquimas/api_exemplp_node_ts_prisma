import { Request, Response } from 'express';
import { GetUserByIdUseCase } from './GetUserByIdUseCase';
import { container } from 'tsyringe';

class GetUserByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);

    const user = await getUserByIdUseCase.execute(Number(id));

    return response.json(user);
  }
}
export { GetUserByIdController };
