import React from 'react';

import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export const SelectSection = ({navigation}: {navigation: any}) => {
  const goToAlbum = () => {
    navigation.navigate('Album');
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => goToAlbum()} style={styles.button}>
        <Text style={styles.text}>Album</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Native Module</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#3F4A9C',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
