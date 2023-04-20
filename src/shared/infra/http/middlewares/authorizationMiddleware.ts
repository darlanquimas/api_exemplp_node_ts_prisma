import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import jwt from 'jsonwebtoken';
import { GetUserByIdUseCase } from '@modules/users/useCases/getUserById/GetUserByIdUseCase';
import { ApiError } from '@shared/errors/ApiError';

type JwtPayload = {
  id: number;
};

export const authorization = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { authorization } = request.headers;
  if (authorization == null) {
    throw new ApiError('Unauthorized', 403);
  }

  const [, token] = String(authorization).split(' ');

  const jwtSecret = process.env.JWT_SECRET || 'jwtSecret';

  let userid: number;

  try {
    const { id } = jwt.verify(token, jwtSecret) as JwtPayload;
    userid = id;
  } catch (error) {
    throw new ApiError('Unauthorized', 403);
  }
  const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);

  const user = await getUserByIdUseCase.execute(userid);

  request.user = user;

  next();
};
