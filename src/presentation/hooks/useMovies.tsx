import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {MovieDBFecher} from '../../config/adapters/movieDB.adapter';

let POPULAR_PAGE = 1;

export const useMovies = () => {
  const [isloading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      MovieDBFecher,
    );
    const popularPromise = await UseCases.moviesPopularUseCase(MovieDBFecher);
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(MovieDBFecher);
    const upComingPromise = await UseCases.moviesUpComingUseCase(MovieDBFecher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);
    setIsLoading(false);

    console.log({
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    });
  };

  return {
    isloading,
    nowPlaying,
    popular,
    topRated,
    upComing,

    //Methods
    popularNextPage: async () => {
      POPULAR_PAGE++;
      const popularMovies = await UseCases.moviesPopularUseCase(MovieDBFecher,{
        page: POPULAR_PAGE,
      });

      setPopular(prev => [...prev, ...popularMovies])
    },
  };
};
