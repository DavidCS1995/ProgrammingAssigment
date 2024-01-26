import React from 'react';
import {View, Text} from 'react-native';

export const ShowImageAlbums = ({route}: {route: any}) => {
  const {nameAlbum} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>{nameAlbum}</Text>
    </View>
  );
};
