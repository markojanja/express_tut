import express from "express";

import { newUserController, addUser } from "../controllers/newUserController.js";

const router = express.Router();

router.get("/", newUserController);
router.post("/", addUser);

export default router;
