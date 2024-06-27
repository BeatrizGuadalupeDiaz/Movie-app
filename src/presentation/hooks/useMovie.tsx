import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {MovieDBFecher} from '../../config/adapters/movieDB.adapter';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie | null>(null);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMovie = await UseCases.getMovieByIdUseCase(
      MovieDBFecher,
      movieId,
    );
    setMovie(fullMovie);
    setIsLoading(false);

    console.log('fullMovie', fullMovie);
  };
  return {
    isLoading,
    movie,
  };
};
