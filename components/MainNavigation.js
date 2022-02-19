import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

export default class MainNavigation extends PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar main={false} navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar main={false} navigation={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}
