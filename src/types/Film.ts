export type CreateFilmObject = {
  title: string;
  serial: number;
  sypnosis: string;
  coverImage: string;
  releaseYear: Date;
  url: string;
  genre: string | null;
  director: string | null;
  producer: string | null;
  type: string | null;
};

export type Film = {
  id: number;
  title: string;
  serial: number;
  sypnosis: string;
  coverImage: string;
  releaseYear: Date;
  url: string;
  genre: string | null;
  director: string | null;
  producer: string | null;
  type: string | null;
};
