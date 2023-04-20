import { Request, Response } from 'express';
import { LoginUseCase } from './LoginUseCase';
import { container } from 'tsyringe';

class LoginController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUseCase = container.resolve(LoginUseCase);

    const login = await loginUseCase.execute(String(email), String(password));

    return response.json(login);
  }
}
export { LoginController };
