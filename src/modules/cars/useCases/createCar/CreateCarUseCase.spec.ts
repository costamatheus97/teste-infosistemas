import { expect } from "chai";

import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = {
      plate: "ABC-1234",
      chassis: 12345678,
      renavam: 12345678,
      model: "Roadster",
      brand: "Tesla",
      year: 2021,
    };

    await createCarUseCase.execute(car);

    const createdCar = await carsRepositoryInMemory.findByChassis(car.chassis);

    expect(createdCar).to.have.property("id");
  });
});
