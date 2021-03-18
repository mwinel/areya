import express, { Request, Response } from "express";
import _ from "underscore";
import { findByLocation, findById } from "../services/hospital-finder";
import {
  notFound,
  singleHospital,
  multipleHospitals,
} from "../services/twiml-generator";

require("dotenv").config();

const router = express.Router();

router.post("/api/v1/search", async (req: Request, res: Response) => {
  const body = req.body.Body;
  res.type("text/xml");

  if (req.cookies.cachedHospitals !== undefined && !isNaN(body)) {
    const cachedHospitals = req.cookies.cachedHospitals;
    const hospitalId = cachedHospitals[body];
    if (hospitalId === undefined) {
      res.send(notFound().toString());
    } else {
      findById(hospitalId, (err: any, hospital: any) => {
        console.log(hospitalId);
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
        console.log(req.cookies);
        res.send(multipleHospitals(options).toString());
      }
    });
  }

  // const smsCount = req.session!.counter || 0;

  // let message = "Type your location to find a nearby medical facility.";

  // if (smsCount > 0) {
  //   message = "Hello, thanks for message number " + (smsCount + 1);
  // }

  // req.session!.counter = smsCount + 1;

  // const twiml = new MessagingResponse();
  // twiml.message(message);

  // res.writeHead(200, { "Content-Type": "text/xml" });
  // res.end(twiml.toString());
});

export { router as sendSMSRouter };
