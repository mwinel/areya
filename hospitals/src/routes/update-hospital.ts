import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  currentUser,
  requireAuth,
  validateRequest,
  NotFoundError,
  NotAuthorizedError,
} from "@areya/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.put(
  "/api/v1/hospitals/:id",
  currentUser,
  requireAuth,
  [
    body("hospitalName")
      .not()
      .isEmpty()
      .withMessage("Hospital name is required."),
    body("location").not().isEmpty().withMessage("Hospital location is required."),
    body("hospitalType")
      .not()
      .isEmpty()
      .withMessage("Hospital type is required."),
    body("size").not().isEmpty().withMessage("Hospital size is required."),
    body("beds").not().isEmpty().withMessage("Number of beds is required."),
    body("phoneNumber")
      .not()
      .isEmpty()
      .withMessage("Contact phone number is required."),
    body("emergencyHotline")
      .not()
      .isEmpty()
      .withMessage("Emergency hotline is required."),
    body("contactPerson")
      .not()
      .isEmpty()
      .withMessage("Contact person is required."),
    body("description")
      .not()
      .isEmpty()
      .withMessage("Hospital description is required."),
  ],
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
      hospitalName: req.body.hospitalName || hospital.hospitalName,
      location: req.body.location || hospital.location,
      hospitalType: req.body.hospitalType || hospital.hospitalType,
      size: req.body.size || hospital.size,
      beds: req.body.beds || hospital.beds,
      phoneNumber: req.body.phoneNumber || hospital.phoneNumber,
      emergencyHotline: req.body.emergencyHotline || hospital.emergencyHotline,
      contactPerson: req.body.contactPerson || hospital.contactPerson,
      description: req.body.description || hospital.description,
    });
    await hospital.save();

    res.send({ data: hospital });
  }
);

export { router as updateHospitalRouter };
