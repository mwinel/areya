import request from "supertest";
import { app } from "../../app";
import { Hospital } from "../../models/hospital";

it("returns a 201 on successful hospital creation with valid inputs.", async () => {
  let hospitals = await Hospital.find({});
  expect(hospitals.length).toEqual(0);

  await request(app)
    .post("/api/v1/hospitals")
    .set("Cookie", global.signin())
    .send({
      hospitalName: "test hospital name",
      location: "test location",
      hospitalType: "public",
      size: "small",
      beds: 10,
      phoneNumber: "0314000666",
      emergencyHotline: "0314000666",
      contactPerson: "Ruth Aceng",
      description: "test description.",
    })
    .expect(201);

  hospitals = await Hospital.find({});
  expect(hospitals.length).toEqual(1);
  expect(hospitals[0].hospitalName).toEqual("test hospital name");
});

it("returns a 401 status code if user is not signed in.", async () => {
  const response = await request(app)
    .post("/api/v1/hospitals")
    .set("Cookie", global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalid hospital name is provided.", async () => {
  await request(app)
    .post("/api/v1/hospitals")
    .set("Cookie", global.signin())
    .send({
      hospitalName: "",
    })
    .expect(400);
});
