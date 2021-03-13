import { twiml } from "twilio";

// var MessagingResponse = require("twilio").twiml.MessagingResponse,
//   _ = require("underscore");

const MessagingResponse = twiml.MessagingResponse;

// Not Found helper method.
export const notFound = () => {
  let resp = new MessagingResponse();
  resp.message("We did not find the hospital you're looking for");
  return resp;
};

// Helper method for creating messages.
export const singleHospital = (hospital: any) => {
  let resp = new MessagingResponse();
  let message = resp.message();
  message.body(
    `${hospital.hospitalName}\n${hospital.phoneNumber}\n${hospital.email}`
  );
  // message.media(hospital.imageUrl);
  return resp;
};

// Helper method to find multiple hospitals.
export const multipleHospitals = (hospitals) => {
  const resp = new MessagingResponse();
  let optionsMessage = _.reduce(
    hospitals,
    (memo, it) => {
      return (memo += `\n${it.option} for ${it.hospitalName}`);
    },
    ""
  );

  resp.message(
    `We found multiple hospitals, reply with:${optionsMessage}\nOr start over`
  );
  return resp;
};
