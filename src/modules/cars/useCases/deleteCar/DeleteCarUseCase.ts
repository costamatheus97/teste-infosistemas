import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class DeleteCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const currentCar = await this.carsRepository.findById(id);

    if (!currentCar) {
      throw new AppError(`Car not found`);
    }

    this.carsRepository.delete(id);
  }
}

export { DeleteCarUseCase };
