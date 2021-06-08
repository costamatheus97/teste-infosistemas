import { container } from "tsyringe";

import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "../../modules/cars/repositories/implementations/CarsRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
