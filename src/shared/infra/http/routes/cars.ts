import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { DeleteCarController } from "../../../../modules/cars/useCases/deleteCar/DeleteCarController";
import { ListCarsController } from "../../../../modules/cars/useCases/listCars/ListCarsController";
import { UpdateCarController } from "../../../../modules/cars/useCases/updateCar/UpdateCarController";

const router = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const updateCarController = new UpdateCarController();
const deleteCarController = new DeleteCarController();

router.post("/", createCarController.handle);

router.get("/", listCarsController.handle);

router.put("/:id", updateCarController.handle);

router.delete("/:id", deleteCarController.handle);

export default router;
