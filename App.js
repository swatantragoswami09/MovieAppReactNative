import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Home />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
