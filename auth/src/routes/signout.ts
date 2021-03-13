import express from "express";

const router = express.Router();

router.post("/api/v1/auth/signout", (req, res) => {
  req.session = null;
  res.send({ data: {}, message: "user successfully signedout." });
});

export { router as signOutRouter };
