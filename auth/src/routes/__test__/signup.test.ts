import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup.", async () => {
  return request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 on signup with an invalid email.", async () => {
  return request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "testtest",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 on signup with an invalid password.", async () => {
  return request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "pa",
    })
    .expect(400);
});

it("returns a 400 on signup with missing email or password.", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
    })
    .expect(400);

  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      password: "password",
    })
    .expect(400);
});

it("disallows duplicate emails on signup.", async () => {
  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("sets a cookie after successful signup.", async () => {
  const response = await request(app)
    .post("/api/v1/auth/signup")
    .send({
      firstName: "Nelson",
      lastName: "Murungi",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
