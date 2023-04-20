import { IUserDTO } from '../dtos/IUserDTO';

interface IUsersRepository {
  createUser(user: IUserDTO): Promise<IUserDTO>;
  getUserByEmail(email: string): Promise<IUserDTO | null>;
  getUserById(id: number): Promise<IUserDTO | null>;
  getUserByUserName(userName: string): Promise<IUserDTO | null>;
  updateUserPassword(id: number, password: string): Promise<IUserDTO | null>;
}
export { IUsersRepository };
