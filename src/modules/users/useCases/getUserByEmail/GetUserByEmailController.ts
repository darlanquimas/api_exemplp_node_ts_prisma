import { Request, Response } from 'express';
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase';
import { container } from 'tsyringe';

class GetUserByEmailController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const getUserByEmailUseCase = container.resolve(GetUserByEmailUseCase);

    const user = await getUserByEmailUseCase.execute(String(email));

    return response.json(user);
  }
}
export { GetUserByEmailController };
