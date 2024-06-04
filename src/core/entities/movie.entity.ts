//modelo personalizado para la entidad Movie
export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: string;
  poster: string;
  backdrop: number;
}
