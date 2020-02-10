import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {Auth_users, post} from '../api/Api';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      User: '',

      Password: '',
    };
  }

  UserLoginFunction = () => {
    const {User} = this.state;
    const {Password} = this.state;

    let Body = {
      user: User,
      password: Password,
    };

    post('/Login.php',Body,this.props.navigation);
  };

  render() {
    return (
      <View style={styles.containerlogin}>
        <View style={styles.container2}>
          <TextInput
            style={styles.text1}
            placeholderTextColor="white"
            keyboardType="email-address"
            placeholder="Ingresa usuario"
            onChangeText={User => this.setState({User})}
            selectionColor="white"
          />
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.text1}
            placeholderTextColor="white"
            secureTextEntry={true}
            placeholder="Ingresa tu contraseña"
            onChangeText={Password => this.setState({Password})}
            selectionColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            padding: 35,
            alignItems: 'center',
          }}>
          <TouchableHighlight
            style={styles.boton}
            onPress={this.UserLoginFunction}>
            <Text style={{color: 'white'}}> Ingresar </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerlogin: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#7fb5b5',
  },
  container2: {
    flexDirection: 'column',
    height: 100,
    padding: 20,
  },
  text1: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    textAlign: 'center',
    color: 'white',
  },
  boton: {
    backgroundColor: 'gray',
    width: 300,
    height: 45,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
