import express, { Request, Response } from "express";
import { currentUser, requireAuth } from "@areya/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.get(
  "/api/v1/hospitals",
  currentUser,
  requireAuth,
  async (req: Request, res: Response) => {
    const hospitals = await Hospital.find({});

    res.send({ data: hospitals });
  }
);

export { router as retrieveHospitalsRouter };
