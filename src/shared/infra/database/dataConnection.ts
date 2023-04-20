import { PrismaClient } from '@prisma/client';

export const dataConnection = new PrismaClient({
  //log: ['query', 'error', 'info'],
});
