import { Hospital } from "../models/hospital";

/**
 * This method allows us to search the hospital by its location.
 * Returns: a list of hospitals that might match the search query.
 * 
 * @param location hospital location.
 * @param callback any callback function.
 */
export const findByLocation = (location: string, callback: any) => {
  Hospital.find(
    {
      location: {
        $regex: location,
        $options: "i",
      },
    },
    callback
  ).sort("location");
};

/**
 * This method allows us to search the hospital by its ID.
 * Returns: the exact hospital match given the search query.
 * 
 * @param id hospital id.
 * @param callback any callback function.
 */
export const findById = (id: any, callback: any) => {
  Hospital.findOne(
    {
      _id: id,
    },
    callback
  );
};
