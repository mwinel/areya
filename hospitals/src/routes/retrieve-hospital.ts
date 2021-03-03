import express, { Request, Response } from "express";
import { NotFoundError } from "@areya/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.get("/api/v1/hospitals/:id", async (req: Request, res: Response) => {
  const hospital = await Hospital.findById(req.params.id);

  if (!hospital) {
    throw new NotFoundError();
  }

  res.send(hospital);
});

export { router as retrieveHospitalRouter };
