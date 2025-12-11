// src/controllers/wordController.ts

import { Request, Response } from 'express';
import Word from '../models/Word';

export const getByGematriaValue = async (req: Request, res: Response) => {
  try {
    const gematriaValue = Number(req.params.value);

    if (Number.isNaN(gematriaValue)) {
      return res.status(400).json({
        message: 'El valor de gematría debe ser un número',
      });
    }

    const words = await Word.find({ gematriaValue });

    if (words.length === 0) {
      return res.status(404).json({
        message: 'No se encontraron palabras con ese valor de gematría',
      });
    }

    return res.json(words);
  } catch (error) {
    const err = error instanceof Error ? error.message : 'Error desconocido';

    return res.status(500).json({
      message: 'Error al buscar palabras',
      error: err,
    });
  }
};
