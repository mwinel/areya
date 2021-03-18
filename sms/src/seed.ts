import mongoose from "mongoose";
import { Hospital } from "./models/hospital";

/**
 * Seed the database
 */
const seedHospitals = async () => {
  // create some hospitals
  const hospitals = [
    {
      id: 1,
      hospitalName: "Makerere University Hospital",
      location: "Makerere Kivulu",
      hospitalType: "public",
      size: "medium",
      beds: 50,
      phoneNumber: "+256 321000555",
      emergencyHotline: "+256 321001555",
      contactPerson: "Sarah Nagayi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1234,
    },
    {
      id: 2,
      hospitalName: "Lugunja Community Hospital",
      location: "Lunguja Zone A",
      hospitalType: "public",
      size: "small",
      beds: 20,
      phoneNumber: "+256 321440555",
      emergencyHotline: "+256 321221555",
      contactPerson: "Aggrey Mbowa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1235,
    },
    {
      id: 3,
      hospitalName: "Kampala Hospital, Nakasero",
      location: "Nakasero, Kampala",
      hospitalType: "private",
      size: "large",
      beds: 100,
      phoneNumber: "+256 321440666",
      emergencyHotline: "+256 321226666",
      contactPerson: "Jackie Mbabazi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1236,
    },
    {
      id: 4,
      hospitalName: "Nakasero Hospital",
      location: "Nakasero, Kampala",
      hospitalType: "private",
      size: "large",
      beds: 160,
      phoneNumber: "+256 321440888",
      emergencyHotline: "+256 321226888",
      contactPerson: "Chris Lutwama",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1237,
    },
    {
      id: 3,
      hospitalName: "Mulago Hospital",
      location: "Mulago, Kampala",
      hospitalType: "public",
      size: "large",
      beds: 1200,
      phoneNumber: "+256 32144099",
      emergencyHotline: "+256 321226699",
      contactPerson: "Any",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1238,
    },
  ];

  await mongoose.connect("mongodb://localhost/hospitals", () => {
    try {
      Hospital.remove({}, () => {
        Hospital.create(hospitals, () => {
          console.log("Data loaded succesfully!");
          mongoose.disconnect();
        });
      });
    } catch (err) {
      throw new Error(err);
    }
  });
};

seedHospitals();