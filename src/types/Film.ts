import { DateValue } from "@nextui-org/react";
import { Directors } from "./Director";
import { GenreType } from "./Genre";
import { MediaType } from "./MediaType";
import { Producer } from "./Producer";

export type CreateFilmObject = {
  title: string;
  serial: string;
  synopsis: string;
  coverImage: string;
  releaseYear: Date | DateValue | null;
  url: string;
  genre: GenreType | null;
  director: Directors | null;
  producer: Producer | null;
  type: MediaType | null;
};

export type Film = {
  _id: string;
  title: string;
  serial: string;
  synopsis: string;
  coverImage: string;
  releaseYear: Date;
  url: string;
  genre: GenreType | null;
  director: Directors | null;
  producer: Producer | null;
  type: MediaType | null;
};
