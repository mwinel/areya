import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface that describes properties required to create a new User.
interface UserAttrs {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role?: string;
}

// An interface that describes the properties of a User Model.
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties of a User Document.
interface UserDoc extends mongoose.Document {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role?: string;
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    role: { 
      type: String, 
      enum: ["admin", "patient"], 
      required: true 
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
