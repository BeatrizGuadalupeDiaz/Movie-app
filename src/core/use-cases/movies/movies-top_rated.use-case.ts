import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MoviePopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import {movieMapper} from '../../../infrastructure/mappers/movie.maper';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MoviePopularResponse>('/top_rated');
    //console.log({nowPlaying}); //transformamos la data a un objeto de tipo Movie
    return topRated.results.map(result =>
      movieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(`Error fetching Top Rated movies: ${error}`);
    return [];
  }
};
