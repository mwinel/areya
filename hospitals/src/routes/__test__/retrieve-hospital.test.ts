import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";

it("returns a 404 if a hospital is not found.", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/hospitals/${id}`).send().expect(404);
});

it("returns a 200 if a hospital is found.", async () => {
  const response = await request(app)
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

  const hospitalResponse = await request(app)
    .get(`/api/v1/hospitals/${response.body.id}`)
    .send()
    .expect(200);

  expect(hospitalResponse.body.hospitalName).toEqual("test hospital name");
  expect(hospitalResponse.body.location).toEqual("test location");
});
