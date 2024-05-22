import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/products.route";

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/products/",ProductRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Thus Route Not Found!",
  });
  next();
});

export default app;