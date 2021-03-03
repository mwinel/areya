import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@mwineltickets/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.post(
  "/api/v1/hospitals",
  requireAuth,
  [body("hospitalName").not().isEmpty().withMessage("Hospital name is required.")],
  validateRequest,

  async (req: Request, res: Response) => {
    const {
      hospitalName,
      location,
      hospitalType,
      size,
      beds,
      phoneNumber,
      emergencyHotline,
      contactPerson,
      description,
    } = req.body;

    const hospital = Hospital.build({
      hospitalName,
      location,
      hospitalType,
      size,
      beds,
      phoneNumber,
      emergencyHotline,
      contactPerson,
      description,
      // userId: req.currentUser!.id,
      userId: "1",
    });

    await hospital.save();

    res.status(201).send(hospital);
  }
);

export { router as createHospitalRouter };
