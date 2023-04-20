import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { ApiError } from '@shared/errors/ApiError';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetUserByEmailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute(email: string): Promise<IUserDTO> {
    const user = await this.usersRepository.getUserByEmail(email);

    if (!user) {
      throw new ApiError('User not found', 404);
    }
    user.password = '***********';
    return user;
  }
}

export { GetUserByEmailUseCase };
