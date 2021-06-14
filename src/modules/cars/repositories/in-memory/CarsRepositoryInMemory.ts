import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { IUpdateCarDTO } from "../../dtos/IUpdateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });

    this.cars.push(car);
  }

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async findById(id: string): Promise<Car> {
    const selectedCar = this.cars.find((car) => car.id === id);

    return selectedCar;
  }

  async findByChassis(chassis: number): Promise<Car> {
    const selectedCar = this.cars.find((car) => car.chassis === chassis);

    return selectedCar;
  }

  async update(id: string, payload: IUpdateCarDTO): Promise<void> {
    const selectedCar = this.cars.find((car) => car.id === id);

    Object.assign(selectedCar, payload);

    this.cars[id] = selectedCar;
  }

  async delete(id: string): Promise<void> {
    const index = this.cars.findIndex((car) => car.id === id);

    this.cars.splice(index, 1);
  }
}

export { CarsRepositoryInMemory };
