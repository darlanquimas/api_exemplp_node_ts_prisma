import { ICustomerRepository } from '@modules/customer/interfaces/ICustomerRepository';
import { UsersRepository } from '@modules/users/infra/reporitosies/UsersRepository';
import { CustomerRepository } from '@modules/customer/infra/reporitosies/CustomerRepository';
import { IUsersRepository } from '@modules/users/interfaces/IUsersRepository';
import { container } from 'tsyringe';
import { ICustomerContactRepository } from '@modules/customer/interfaces/ICustomerContactRepository';
import { CustomerContactRepository } from '@modules/customer/infra/reporitosies/CustomerContactRepository';
import { CustomerAddressRepository } from '@modules/customer/infra/reporitosies/CustomerAddressRepository';
import { ICustomerAddressRepository } from '@modules/customer/interfaces/ICustomerAddressRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository,
);

container.registerSingleton<ICustomerAddressRepository>(
  'CustomerAddressRepository',
  CustomerAddressRepository,
);

container.registerSingleton<ICustomerContactRepository>(
  'CustomerContactRepository',
  CustomerContactRepository,
);
export { container };
