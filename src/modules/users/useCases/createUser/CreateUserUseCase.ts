import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { ApiError } from '@shared/errors/ApiError';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUsecase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute(user: IUserDTO): Promise<IUserDTO> {
    const hasEmail = await this.usersRepository.getUserByEmail(user.email);

    if (hasEmail !== null) {
      throw new ApiError('Email already exists', 400);
    }

    const hasUserName = await this.usersRepository.getUserByUserName(
      user.userName,
    );

    if (hasUserName !== null) {
      throw new ApiError('Username already exists', 400);
    }

    const hashPass = await bcrypt.hash(user.password, 10);

    user.password = hashPass;
    const created = await this.usersRepository.createUser(user);

    return created;
  }
}

export { CreateUserUsecase };
