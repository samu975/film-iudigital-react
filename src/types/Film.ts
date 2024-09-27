import { Directors } from "./Director";
import { GenreType } from "./Genre";
import { MediaType } from "./MediaType";
import { Producer } from "./Producer";

export type CreateFilmObject = {
  title: string;
  serial: number;
  synopsis: string;
  coverImage: string;
  releaseYear: Date;
  url: string;
  genre: string | null;
  director: string | null;
  producer: string | null;
  type: string | null;
};

export type Film = {
  _id: string;
  title: string;
  serial: number;
  synopsis: string;
  coverImage: string;
  releaseYear: Date;
  url: string;
  genre: GenreType | null;
  director: Directors | null;
  producer: Producer | null;
  type: MediaType | null;
};
