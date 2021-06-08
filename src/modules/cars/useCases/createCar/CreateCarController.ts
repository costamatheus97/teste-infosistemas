import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { plate, chassis, renavam, model, brand, year } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    await createCarUseCase.execute({
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });

    return res.status(201).send();
  }
}

export { CreateCarController };
