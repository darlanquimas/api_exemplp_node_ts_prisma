import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { dataConnection } from '@shared/infra/database/dataConnection';

class UsersRepository implements IUsersRepository {
  public async getUserById(id: number): Promise<IUserDTO | null> {
    const user = await dataConnection.user.findUnique({
      where: { id: id },
    });

    return user;
  }
  public async getUserByUserName(userName: string): Promise<IUserDTO | null> {
    const user = await dataConnection.user.findUnique({
      where: { userName: userName },
    });

    return user;
  }

  public async getUserByEmail(email: string): Promise<IUserDTO | null> {
    const user = await dataConnection.user.findUnique({
      where: { email: email },
    });

    return user;
  }

  public async getUserByid(id: number): Promise<IUserDTO | null> {
    console.log('entrou');
    const user = await dataConnection.user.findUnique({
      where: { id: id },
    });

    return user;
  }

  public async updateUserPassword(
    id: number,
    password: string,
  ): Promise<IUserDTO> {
    const userUpdated = await dataConnection.user.update({
      where: {
        id: id,
      },
      data: {
        password: password,
      },
    });
    return userUpdated;
  }

  public async createUser(user: IUserDTO): Promise<IUserDTO> {
    const userCreated = await dataConnection.user.create({ data: user });

    const created: IUserDTO = {
      id: userCreated.id,
      name: userCreated.name,
      userName: userCreated.userName,
      password: '**********',
      email: userCreated.email,
    };

    return created;
  }
}

export { UsersRepository };
