import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { IUpdateCarDTO } from "../dtos/IUpdateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByChassis(chassis: number): Promise<Car>;
  findById(id: string): Promise<Car>;
  list(): Promise<Car[]>;
  create({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
  }: ICreateCarDTO): Promise<void>;
  update(id: string, payload: IUpdateCarDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICarsRepository, ICreateCarDTO, IUpdateCarDTO };
