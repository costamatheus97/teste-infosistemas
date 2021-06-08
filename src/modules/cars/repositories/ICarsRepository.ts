import { Car } from "../entities/Car";

interface ICreateCarDTO {
  plate: string;
  chassis: number;
  renavam: number;
  model: string;
  brand: string;
  year: number;
}

interface IUpdateCarDTO {
  plate?: string;
  chassis?: number;
  renavam?: number;
  model?: string;
  brand?: string;
  year?: number;
}

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
