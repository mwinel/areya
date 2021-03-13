import request from "supertest";
import { app } from "../../app";

// const cookie = global.signin();

const createHospital = () => {
  return request(app)
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
    });
};

it("returns a list of hospitals.", async () => {
  await createHospital();
  await createHospital();
  const response = await request(app)
    .get("/api/v1/hospitals")
    .set("Cookie", global.signin())
    .send()
    .expect(200);
  expect(response.body.data.length).toEqual(2);
});
