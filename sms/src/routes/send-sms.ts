import express, { Request, Response } from "express";
// import { twiml } from "twilio";
import _ from "underscore";
import { findByLocation, findById } from "../services/hospital-finder";
import {
  notFound,
  singleHospital,
  multipleHospitals,
} from "../services/twiml-generator";

require("dotenv").config();

const router = express.Router();
// const MessagingResponse = require("twilio").twiml.MessagingResponse;

// const { MessagingResponse } = twiml;

router.post("/messages", async (req: Request, res: Response) => {
  const body = req.body.Body;
  // res.type("text/xml");

  if (req.cookies.cachedHospitals !== undefined && !isNaN(body)) {
    const cachedHospitals = req.cookies.cachedHospitals;
    const hospitalId = cachedHospitals[body];
    if (hospitalId === undefined) {
      res.send(notFound().toString());
    } else {
      findById(hospitalId, (err: any, hospital: any) => {
        res.clearCookie("cachedHospitals");
        res.send(singleHospital(hospital).toString());
      });
    }
  } else {
    findByLocation(body, (err: any, hospitals: any) => {
      if (hospitals.length === 0) {
        res.send(notFound().toString());
      } else if (hospitals.length === 1) {
        res.send(singleHospital(hospitals[0]).toString());
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
        res.send(multipleHospitals(options).toString());
      }
    });
  }
});

export { router as sendSMSRouter };
