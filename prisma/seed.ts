import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const hashPass = await bcrypt.hash('123456', 10);
  const user = {
    name: 'admin',
    userName: 'admin',
    email: 'admin@admin.com',
    password: hashPass,
    admin: true,
  };

  const hasUser = await prisma.user.findMany({
    where: { email: 'admin@admin.com', userName: 'admin' },
  });

  if (hasUser[0] == null) {
    await prisma.user.create({ data: user });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    console.info('Seed Executada com sucesso');
    process.exit(1);
  });
