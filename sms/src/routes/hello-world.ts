import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/v1/hello-world", async (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

export { router as helloWorldRouter };
