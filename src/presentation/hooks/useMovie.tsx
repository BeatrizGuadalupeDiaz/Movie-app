import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {MovieDBFecher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie | null>(null);
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      MovieDBFecher,
      movieId,
    );
    const castPromise = UseCases.getMovieCastUseCase(MovieDBFecher, movieId);

    const [fullMovie, castMovie] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(castMovie);

    setIsLoading(false);
  };
  return {
    isLoading,
    movie,
    cast,
  };
};
