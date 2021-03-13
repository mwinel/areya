import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@areya/common";

import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/v1/auth/signup",
  [
    body("firstName").not().isEmpty().withMessage("First name is required."),
    body("lastName").not().isEmpty().withMessage("Last name is required."),
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password").not().isEmpty().withMessage("Password is required."),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Enter a strong password."),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const role = "admin";

    // Check if user exists.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError("User with this email already exists.");
    }

    const user = User.build({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      role,
    });
    await user.save();

    // Generate JWT.
    const userJwt = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY!
    );

    // Set it on the session req object.
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send({ data: user, message: "user successfully created." });
  }
);

export { router as signUpRouter };
