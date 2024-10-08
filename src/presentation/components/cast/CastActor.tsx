import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Cast} from '../../../core/entities/cast.entity';

type Props = {
  actor: Cast;
};
export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    display: 'flex',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
