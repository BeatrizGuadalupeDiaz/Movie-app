import {View, Text} from 'react-native';
import React from 'react';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreens = () => {
  const {} = useMovies();
  return (
    <View>
      <Text>HomeScreens</Text>
    </View>
  );
};
