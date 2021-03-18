import express from "express";
import "express-async-errors";
import { json } from "body-parser";
// import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@areya/common";

import { helloWorldRouter } from "./routes/hello-world";
import { sendSMSRouter } from "./routes/send-sms";

import cookieParser from 'cookie-parser';

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(cookieParser())
// app.use(express.cookieParser())
// app.use(session({ secret: "anything-you-want-but-keep-secret" }));
// app.use(
//   cookieSession({
//     signed: false,
//     secure: process.env.NODE_ENV !== "test",
//     // cookie: { secure: true }
//     // secret: 'any-thing-you-want-but-a-secret'
//   })
// );

app.use(helloWorldRouter);
app.use(sendSMSRouter);

app.all("*", async (res, req) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
