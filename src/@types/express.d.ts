declare namespace Express {
  export interface Request {
    user: {
      id?: number;
      name: string;
      userName: string;
      email: string;
      password: string;
      admin?: boolean;
      createdAt?: Date | null;
      updatedAt?: Date | null;
    };
  }
}
