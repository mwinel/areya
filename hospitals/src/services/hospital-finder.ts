import { Hospital } from "../models/hospital";

// The user sends a SMS with a predefined location to a phone number number.
// The user receives information about the nearest hospitals.

// The hospital-finder module allows us to search the database for hospitals
// either by name or by their unique database identifier.
// When searching by name, we'll return a list of hospitals whose name might match a search query,
// or just one if we find an exact match.
// If we know the ID of the hospital we're looking for, we can return it right away.

export const findByName = function (hospitalName: string, callback: any) {
  Hospital.find(
    {
      fullName: {
        $regex: hospitalName,
        $options: "i",
      },
    },
    callback
  ).sort("fullName");
};

export const findById = function (id: string, callback: any) {
  Hospital.findOne(
    {
      _id: id,
    },
    callback
  );
};
