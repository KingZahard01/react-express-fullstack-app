// src/routes/wordRoutes.js

import { Router } from "express";
import { getByGematriaValue } from "../controllers/wordController";

const router = Router();

router.get("/gematria/:value", getByGematriaValue);

export default router;
