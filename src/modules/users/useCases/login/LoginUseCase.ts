import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { ApiError } from '@shared/errors/ApiError';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';

interface ILogedIn {
  id?: number;
  name: string;
  email: string;
}

@injectable()
class LoginUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute(email: string, password: string): Promise<ILogedIn> {
    if (email === null || password === null) {
      throw new ApiError('Wrong user/password', 401);
    }

    const user = await this.usersRepository.getUserByEmail(email);

    if (user == null) {
      throw new ApiError('Wrong user/password', 401);
    }
    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new ApiError('Wrong user/password', 401);
    }

    const jwtPass = process.env.JWT_SECRET || 'ApiJWTSecret';

    const logefIn: ILogedIn = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(logefIn, jwtPass, {
      expiresIn: '3d',
    });

    const data = { ...logefIn, token };
    return data;
  }
}

export { LoginUseCase };
