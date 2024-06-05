import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import {movieMapper} from '../../../infrastructure/mappers/movie.maper';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/upcoming');
    //console.log({nowPlaying}); //transformamos la data a un objeto de tipo Movie
    return nowPlaying.results.map(result =>
      movieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(`Error fetching now playing movies: ${error}`);
    return [];
  }
};
