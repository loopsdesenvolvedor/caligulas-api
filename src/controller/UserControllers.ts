import { Request, Response } from "express";

class AllControllers {
  createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
  }
}

export { AllControllers };
