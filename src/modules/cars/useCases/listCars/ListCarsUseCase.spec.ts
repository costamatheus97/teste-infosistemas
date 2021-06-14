import { expect } from "chai";

import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should return all cars", async () => {
    const car = {
      plate: "ABC-1234",
      chassis: 12345678,
      renavam: 12345678,
      model: "Roadster",
      brand: "Tesla",
      year: 2021,
    };

    await createCarUseCase.execute(car);

    const result = await listCarsUseCase.execute();

    expect(result).to.have.length(1);
  });
});
