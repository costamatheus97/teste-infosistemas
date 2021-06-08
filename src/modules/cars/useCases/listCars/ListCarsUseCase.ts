import { inject, injectable } from "tsyringe";

import { Car } from "../../entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}
  async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.list();

    return cars;
  }
}

export { ListCarsUseCase };
