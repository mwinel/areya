import request from "supertest";
import { app } from "../../app";

it("returns a 200 and sets a cookie on successful signin.", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/v1/auth/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("returns a 400 on signin with an invalid email.", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/v1/auth/signin")
    .send({
      email: "testtest",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 on signin with an invalid password.", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/v1/auth/signin")
    .send({
      email: "test@test.com",
      password: "pa",
    })
    .expect(400);
});

it("returns a 400 on signin with missing email or password.", async () => {
  await request(app)
    .post("/api/v1/auth/signin")
    .send({
      email: "test@test.com",
    })
    .expect(400);

  await request(app)
    .post("/api/v1/auth/signin")
    .send({
      password: "password",
    })
    .expect(400);
});
