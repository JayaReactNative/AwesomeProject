import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NavigationScreen from './src/RoutNavigation/NaviagtionScreen'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationScreen />
    </SafeAreaView>
  );
};

export default App;

