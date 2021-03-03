import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";

it("returns a 404 if the provided hospital id does not exist.", async () => {
  // const id = new mongoose.Types.ObjectId().toHexString();
  // await request(app)
  //   .put(`/api/v1/hospitals/${id}`)
  //   .set("Cookie", global.signin())
  //   .send({
  //     hospitalName: "test hospital name",
  //     location: "test location",
  //     hospitalType: "public",
  //     size: "small",
  //     beds: 10,
  //     phoneNumber: "0314000666",
  //     emergencyHotline: "0314000666",
  //     contactPerson: "Ruth Aceng",
  //     description: "test description.",
  //   })
  //   .expect(404);
});

// it("returns a 401 if the user is not authenticated.", async () => {
//   const id = new mongoose.Types.ObjectId().toHexString();
//   await request(app)
//     .put(`/api/v1/hospitals/${id}`)
//     .send({
//       hospitalName: "test hospital name",
//       location: "test location",
//       hospitalType: "public",
//       size: "small",
//       beds: 10,
//       phoneNumber: "0314000666",
//       emergencyHotline: "0314000666",
//       contactPerson: "Ruth Aceng",
//       description: "test description.",
//     })
//     .expect(401);
// });
