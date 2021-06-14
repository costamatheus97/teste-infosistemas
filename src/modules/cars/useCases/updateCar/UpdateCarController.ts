import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCarUseCase } from "./UpdateCarUseCase";

class UpdateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const payload = req.body;
    const { id } = req.params;

    const updateCarUseCase = container.resolve(UpdateCarUseCase);

    await updateCarUseCase.execute(payload, id);

    return res.status(204).send();
  }
}

export { UpdateCarController };
