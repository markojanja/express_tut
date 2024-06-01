import express from "express";

import { noteController, addNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", noteController);
router.post("/", addNote);

export default router;
