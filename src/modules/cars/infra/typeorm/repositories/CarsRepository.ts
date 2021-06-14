import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { IUpdateCarDTO } from "../../../dtos/IUpdateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
  }: ICreateCarDTO): Promise<void> {
    const car = this.repository.create({
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });

    await this.repository.save(car);
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const selectedCar = await this.repository.findOne({ where: { id } });

    return selectedCar;
  }

  async findByChassis(chassis: number): Promise<Car> {
    const selectedCar = await this.repository.findOne({ where: { chassis } });

    return selectedCar;
  }

  async update(id: string, payload: IUpdateCarDTO): Promise<void> {
    await this.repository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CarsRepository };
