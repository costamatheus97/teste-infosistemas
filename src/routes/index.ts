import { Router } from "express";

import cars from "./cars";

const router = Router();

router.use("/cars", cars);

export default router;
