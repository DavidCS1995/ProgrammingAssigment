import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {ItemByAlbum} from './itemByAlbum';

export const ItemByUsers = ({navigation}: {navigation: any}) => {
  const dataUsersAlbum = [
    {
      name: 'Carlos',
      dataAlbum: [
        {
          titleAlbum: 'Otro album',
          onPressNavigate: () => onPressControllerNavigate(0),
          onPressDelete: () => onPressControllerDelete(1),
        },
        {
          titleAlbum: 'Taylor',
          onPressNavigate: () => onPressControllerNavigate(0),
          onPressDelete: () => onPressControllerDelete(1),
        },
      ],
      view: 'ShowImage',
    },
    {
      name: 'Dave',
      dataAlbum: [
        {
          titleAlbum: 'Otro album',
          onPressNavigate: () => onPressControllerNavigate(0),
          onPressDelete: () => onPressControllerDelete(1),
        },
        {
          titleAlbum: 'Otro MAS',
          onPressNavigate: () => onPressControllerNavigate(0),
          onPressDelete: () => onPressControllerDelete(1),
        },
      ],

      view: 'ShowImage',
    },
  ];

  const onPressControllerNavigate = (i: number) => {
    const dataOnPress: string = dataUsersAlbum[i].view;
    navigation.navigate(dataOnPress, {
      nameAlbum: dataUsersAlbum[i].dataAlbum[i].titleAlbum,
    });
  };

  const onPressControllerDelete = (i: number) => {
    const dataOnPress = dataUsersAlbum[i];
    // dataOnPress.dataAlbum?.titleAlbum;
    console.log('Eliminar album');
  };

  return (
    <ScrollView>
      {dataUsersAlbum.map((usersAlbum, i) => (
        <View style={styles.content}>
          <Text style={styles.title}>{usersAlbum.name}</Text>
          {usersAlbum.dataAlbum.map((albums, i) => (
            <ItemByAlbum
              key={i}
              titleAlbum={albums.titleAlbum}
              onPressTitleAlbum={albums.onPressNavigate}
              onPressDelete={albums.onPressDelete}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
  },

  title: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
