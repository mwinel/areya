import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  NotFoundError,
  NotAuthorizedError,
  requireAuth,
} from "@areya/common";
import { Twilio } from "twilio";

import { Hospital } from "../models/hospital";

const router = express.Router();

router.post("/search/", async (req, res, next) => {
  const body = req.body.Body;
  res.type("text/xml");

  if (req.cookies.cachedHospitals !== undefined && !isNaN(body)) {
    const cachedHospitals = req.cookies.cachedHospitals;
    const hospitalId = cachedHospitals[body];
    if (hospitalId === undefined) {
      res.send(twimlGenerator.notFound().toString());
    } else {
      hospitalFinder.findById(hospitalId, (err, hospital) => {
        res.clearCookie("cachedHospitals");
        res.send(twimlGenerator.singleHospital(hospital).toString());
      });
    }
  } else {
    hospitalFinder.findByName(body, (err, hospitals) => {
      if (hospitals.length === 0) {
        res.send(twimlGenerator.notFound().toString());
      } else if (hospitals.length === 1) {
        res.send(twimlGenerator.singleHospital(hospitals[0].toString()));
      } else {
        const options = _.map(hospitals, (it, index) => {
          return {
            option: index + 1,
            hospitalName: it.hospitalName,
            id: it.id,
          };
        });

        const cachedHospitals = _.object(
          _.map(options, (it) => {
            return [it.option, it.id];
          })
        );

        res.cookie("cachedHospitals", cachedHospitals, {
          maxAge: 1000 * 60 * 60,
        });

        res.send(twimlGenerator.multipleEmployees(options).toString());
      }
    });
  }
});
