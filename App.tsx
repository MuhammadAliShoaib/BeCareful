import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, Platform, UIManager} from 'react-native';
import Navigation from './src/navigation';

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      /> 
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
