import { expect } from "chai";

import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarsUseCase } from "../listCars/ListCarsUseCase";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

let createCarUseCase: CreateCarUseCase;
let deleteCarUseCase: DeleteCarUseCase;
let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Delete Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    deleteCarUseCase = new DeleteCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to delete a car", async () => {
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

    deleteCarUseCase.execute(createdCar.id);

    const cars = await listCarsUseCase.execute();

    expect(cars).to.have.length(0);
  });
});
