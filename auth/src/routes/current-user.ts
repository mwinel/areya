import express from "express";
import { currentUser } from "@mwineltickets/common";

const router = express.Router();

router.get("/api/v1/auth/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
