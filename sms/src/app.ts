import express, { urlencoded } from "express";
import "express-async-errors";
import { json } from "body-parser";
import { errorHandler, NotFoundError } from "@areya/common";

import { helloWorldRouter } from "./routes/hello-world";
import { sendSMSRouter } from "./routes/send-sms";

import cookieParser from "cookie-parser";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helloWorldRouter);
app.use(sendSMSRouter);

app.all("*", async (res, req) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
