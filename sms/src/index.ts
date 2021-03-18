import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost/hospitals", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    // Throw error for debugging purposes.
    // Dig deep to what exact error is being thrown.
    throw new Error(err);
  }
  app.listen(3000, () => {
    console.log("Conversational SMS service listening on port 3000.:");
  });
};

start();
