import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
    // <View>
    //   <Home />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
