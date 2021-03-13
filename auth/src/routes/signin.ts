import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@areya/common";

import { User } from "../models/user";
import { Password } from "../services/password";

const router = express.Router();

router.post(
  "/api/v1/auth/signin",
  [
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password field is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if user exists.
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials.");
    }

    // Compare passwords.
    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      throw new BadRequestError("Invalid credentials.");
    }

    // Generate JWT.
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!
    );

    // Set it on the session req object.
    req.session = {
      jwt: userJwt,
    };

    res
      .status(200)
      .send({ data: existingUser, message: "user loggedin successfully." });
  }
);

export { router as signInRouter };
