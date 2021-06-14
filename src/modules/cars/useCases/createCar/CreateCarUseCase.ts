import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  plate: string;
  chassis: number;
  renavam: number;
  model: string;
  brand: string;
  year: number;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
  }: IRequest): Promise<void> {
    const carAlreadyExists = await this.carsRepository.findByChassis(chassis);

    if (carAlreadyExists) {
      throw new AppError(`Car already exists`);
    }

    this.carsRepository.create({
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });
  }
}

export { CreateCarUseCase };
