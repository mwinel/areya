import express, { Request, Response } from "express";
import { body } from "express-validator";
import { currentUser, requireAuth, validateRequest } from "@areya/common";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.post(
  "/api/v1/hospitals",
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
      userId: req.currentUser!.id,
    });

    await hospital.save();

    res.status(201).send({ data: hospital });
  }
);

export { router as createHospitalRouter };
