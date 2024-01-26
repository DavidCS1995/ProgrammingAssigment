import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Album} from '../screen/album/Album';
import {SelectSection} from '../screen/Section/SelectSection';
import {ShowImageAlbums} from '../screen/album/components/ShowImageAlbums';

const Stack = createNativeStackNavigator();

export const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          component={SelectSection}
          name="Menu"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Album} name="Album" />
        <Stack.Screen component={ShowImageAlbums} name="ShowImage" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
  },
});
