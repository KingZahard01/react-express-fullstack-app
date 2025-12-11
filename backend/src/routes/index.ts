// src/routes/index.ts
import { Router } from 'express';
import wordRoutes from './wordRoutes';

const router = Router();

router.use('/words', wordRoutes);

export default router;

// GET /api/words/gematria/:value
