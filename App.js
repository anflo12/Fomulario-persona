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
import UsersItems from './Components/UsersItems';
import UserList from './Components/UserList';
import InfoAspirantes from './Components/InfoAspirantes';
import ActualizarInfo from './Components/ActualizarInfo';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7fb5b5',
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
        backgroundColor: '#7fb5b5',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Registro de postulantes',
    },
  },
  Aspirantes: {
    screen: UserList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7fb5b5',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Aspirantes',
    },
  },
  Informacion: {
    screen: InfoAspirantes,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7fb5b5',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Hoja de vida',
    },
  },
  Actualizar: {
    screen: ActualizarInfo,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7fb5b5',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center',
      title: 'Actualizar informacion',
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
