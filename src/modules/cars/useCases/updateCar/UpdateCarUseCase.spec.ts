import { expect } from "chai";

import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let updateCarUseCase: UpdateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Update Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    updateCarUseCase = new UpdateCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to update a car", async () => {
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

    await updateCarUseCase.execute(
      {
        model: "350z",
      },
      createdCar.id
    );

    expect(createdCar.model).to.be.equal("350z");
  });
});
