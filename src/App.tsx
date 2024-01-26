import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {Container} from './navigators/Container';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Container />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
