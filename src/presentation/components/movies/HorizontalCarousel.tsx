import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

type Props = {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
};
export const HorizontalCarousel = ({movies, title,loadNextPage}: Props) => {
    //dterminar cuanod llamamos la funcion y evitar que se re-renderize
    const isLoading = useRef(false);
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies])
    
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current && loadNextPage) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;
    //si es el final cargar mas peliculas
    loadNextPage && loadNextPage();
  };
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: {item: Movie}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
