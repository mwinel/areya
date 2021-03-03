import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import jwt from "jsonwebtoken";
import { app } from "../app";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string;
    }
  }
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "randomstring";

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getConnectionString();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a JWT payload: { id, email }.
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    firstName: "Nelson",
    lastName: "Murungi",
    email: "test@test.com",
    role: "admin",
  };

  // Create a JWT.
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build out a session object: { jwt: FAKE_JWT}.
  const session = { jwt: token };
  // Turn that session into JSON.
  const sessionJSON = JSON.stringify(session);
  // Take JSON and encode it as base64.
  const base64 = Buffer.from(sessionJSON).toString("base64");

  return `express:sess=${base64}`;
};
