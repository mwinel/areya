import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
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

global.signin = async () => {
  const firstName = "Nelson";
  const lastName = "Murungi";
  const email = "test@test.com";
  const password = "password";
  const phoneNumber = "0705777086";
  const role = "admin";

  const response = await request(app)
    .post("/api/v1/auth/signup")
    .send({ firstName, lastName, email, password, phoneNumber, role })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
};
