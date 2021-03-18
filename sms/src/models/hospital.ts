import mongoose from "mongoose";

// An interface that describes properties required to create a new Hospital.
interface HospitalAttrs {
  hospitalName: string;
  location: string;
  hospitalType: string;
  size: string;
  beds: number;
  phoneNumber: string;
  emergencyHotline: string;
  contactPerson: string;
  description: string;
  userId: string;
}

// An interface that describes the properties of a Hospital Document.
interface HospitalDoc extends mongoose.Document {
  hospitalName: string;
  location: string;
  hospitalType: string;
  size: string;
  beds: number;
  phoneNumber: string;
  emergencyHotline: string;
  contactPerson: string;
  description: string;
  userId: string;
}

// An interface that decsribes the properties of a Hospital Model.
interface HospitalModel extends mongoose.Model<HospitalDoc> {
  build(attrs: HospitalAttrs): HospitalDoc;
}

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    hospitalType: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emergencyHotline: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

hospitalSchema.statics.build = (attrs: HospitalAttrs) => {
  return new Hospital(attrs);
};

const Hospital = mongoose.model<HospitalDoc, HospitalModel>(
  "Hospital",
  hospitalSchema
);

export { Hospital };
