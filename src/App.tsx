import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from './assets/theme/colors';
import Navigation from './navigation';

const App = () => {
  return (
    <View style={styles.app}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
