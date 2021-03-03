import express, { Request, Response } from "express";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.get("/api/v1/hospitals", async (req: Request, res: Response) => {
  const hospitals = await Hospital.find({});

  res.send(hospitals);
});

export { router as retrieveHospitalsRouter };
