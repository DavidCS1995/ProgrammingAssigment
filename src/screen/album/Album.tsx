import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {ItemByUsers} from './components/ItemByUsers';

export const Album = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.content}>
      <ItemByUsers navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'black',
  },
});
