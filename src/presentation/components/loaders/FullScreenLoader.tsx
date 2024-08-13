import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export const FullScreenLoader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size="large" color={'indigo'} />
    </View>
  );
};
