import {View, Text} from 'react-native';
import React from 'react';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreens = () => {
  const {top} = useSafeAreaInsets();
  const {isloading, nowPlaying, popular, topRated, upComing, popularNextPage} =
    useMovies();

  if (isloading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top, paddingTop: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Popular */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor Califiadas" />
        {/* UpComing */}
        <HorizontalCarousel movies={upComing} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
