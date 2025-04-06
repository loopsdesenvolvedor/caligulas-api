import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { routes } from "./routes";
const app = express();

dotenv.config();

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ message: err.message });
    return;
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return;
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port :${process.env.PORT}`);
});
