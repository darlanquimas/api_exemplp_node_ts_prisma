import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import '@shared/container';
import { errorMiddleware } from '@shared/infra/http/middlewares/errorMiddleware';
import helmet from 'helmet';

const app = express();
const port = Number(process.env.APP_PORT) || 3333;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(routes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Api - started on port ${port}`);
});
