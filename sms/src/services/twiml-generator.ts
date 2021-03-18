import _ from "underscore";

const MessagingResponse = require("twilio").twiml.MessagingResponse;

export const notFound = () => {
  const resp = new MessagingResponse();
  resp.message("We did not find any medical facilities nearby you.");
  return resp;
};

export const singleHospital = (hospital: any) => {
  const resp = new MessagingResponse();
  // const message = resp.message();
  resp.message(`${hospital.hospitalName}\n${hospital.phoneNumber}`);
  // message.body(`${hospital.hospitalName}\n${hospital.phoneNumber}`)
  return resp;
};

export const multipleHospitals = (hospitals: any) => {
  const resp = new MessagingResponse();
  const optionsMessage = _.reduce(
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
