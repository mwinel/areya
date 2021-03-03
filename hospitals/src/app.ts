import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@mwineltickets/common";

import { createHospitalRouter } from "./routes/create-hospital";
import { retrieveHospitalRouter } from "./routes/retrieve-hospital";
import { retrieveHospitalsRouter } from "./routes/retrieve-hospitals";
import { updateHospitalRouter } from "./routes/update-hospital";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(createHospitalRouter);
app.use(retrieveHospitalRouter);
app.use(retrieveHospitalsRouter);
app.use(updateHospitalRouter);

app.all("*", async (res, req) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
