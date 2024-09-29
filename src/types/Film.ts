import { DateValue } from "@nextui-org/react";
import { Directors } from "./Director";
import { GenreType } from "./Genre";
import { MediaType } from "./MediaType";
import { ProducerType } from "./Producer";

export type CreateFilmObject = {
  title: string;
  serial: string;
  synopsis: string;
  coverImage: string;
  releaseYear: Date | DateValue | null;
  url: string;
  genre: GenreType | null;
  director: Directors | null;
  producer: ProducerType | null;
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
  producer: ProducerType | null;
  type: MediaType | null;
};
