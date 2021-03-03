import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  NotFoundError,
  NotAuthorizedError,
  requireAuth,
} from "@areya/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.put(
  "/api/v1/hospitals/:id",
  requireAuth,
  [body("name").not().isEmpty().withMessage("Hospital name is required.")],
  validateRequest,
  async (req: Request, res: Response) => {
    const hospital = await Hospital.findById(req.params.id);

    if (!hospital) {
      throw new NotFoundError();
    }

    if (hospital.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    hospital.set({
      name: req.body.name,
    });
    await hospital.save();

    res.send(hospital);
  }
);

export { router as updateHospitalRouter };
