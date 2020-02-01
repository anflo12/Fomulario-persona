/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import Login from './Screens/LoginScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import Registro from './Screens/RegistroScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Inicio',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registro: {
    screen: Registro,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Registro de postulantes',
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  return (
    <>
      <AppContainer/>
    </>
  );
};

export default App;
