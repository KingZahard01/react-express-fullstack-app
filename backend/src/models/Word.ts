// src/models/Word.ts

import { Schema, model } from "mongoose";

export interface IWord {
  gematriaValue: number;
  word: string;
  book: string;
  chapter: number;
  verse: number;
}

const WordSchema = new Schema<IWord>(
  {
    gematriaValue: {
      type: Number,
      required: true,
      index: true,
    },
    word: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
    },
    book: {
      type: String,
      required: true,
    },
    chapter: {
      type: Number,
      required: true,
      min: 1,
    },
    verse: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    collection: "words",
  },
);

export default model<IWord>("Word", WordSchema);
