import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MoviePopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import {movieMapper} from '../../../infrastructure/mappers/movie.maper';

type Options = {
  page?: number;
  limit?: number;
};
export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MoviePopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });
    //console.log({nowPlaying}); //transformamos la data a un objeto de tipo Movie
    return popular.results.map(result =>
      movieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(`Error fetching popular movies: ${error}`);
    return [];
  }
};
