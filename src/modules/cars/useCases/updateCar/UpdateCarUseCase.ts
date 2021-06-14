import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  plate?: string;
  chassis?: number;
  renavam?: number;
  model?: string;
  brand?: string;
  year?: number;
}

@injectable()
class UpdateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(payload: IRequest, id: string): Promise<void> {
    const selectedCar = await this.carsRepository.findById(id);

    if (!selectedCar) {
      throw new AppError(`Car not found`);
    }

    Object.assign(selectedCar, payload);

    this.carsRepository.update(id, selectedCar);
  }
}

export { UpdateCarUseCase };
