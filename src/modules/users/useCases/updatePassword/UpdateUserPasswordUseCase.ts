import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { ApiError } from '@shared/errors/ApiError';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';

interface UpdateResponse {
  message: string;
}

@injectable()
class UpdateUserPasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute(
    id: number,
    oldPassword: string,
    newPassword: string,
  ): Promise<UpdateResponse> {
    const user = await this.usersRepository.getUserById(id);

    if (user == null) {
      throw new ApiError('User not found', 404);
    }

    const compare = await bcrypt.compare(oldPassword, user.password);

    if (!compare) {
      throw new ApiError('Invalid old password', 400);
    }

    const hashNewPass = await bcrypt.hash(newPassword, 10);

    const created = await this.usersRepository.updateUserPassword(
      id,
      hashNewPass,
    );

    if (created == null) {
      throw new ApiError('Internal server error', 500);
    }

    return { message: 'Password updated successfully!' };
  }
}

export { UpdateUserPasswordUseCase };
