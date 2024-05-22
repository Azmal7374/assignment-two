import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/products/products.route';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/products', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(`${a}`);
};

app.get('/', getAController);

export default app;
