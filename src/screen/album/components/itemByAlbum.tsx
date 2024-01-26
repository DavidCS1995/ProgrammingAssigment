import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Icons} from '../../../utils/images';

interface itemByAlbumProps {
  titleAlbum: string;
  onPressTitleAlbum?: () => void;
  onPressDelete?: () => void;
}

export const ItemByAlbum = ({
  titleAlbum,
  onPressTitleAlbum,
  onPressDelete,
}: itemByAlbumProps) => {
  return (
    <View style={styles.album}>
      <TouchableOpacity onPress={onPressTitleAlbum}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          {titleAlbum ? titleAlbum : 'Unknown'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete} style={styles.icon}>
        <Image style={styles.img} source={Icons.iconDelete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  album: {
    width: '90%',
    alignSelf: 'flex-end',
    padding: 5,
    borderTopWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
