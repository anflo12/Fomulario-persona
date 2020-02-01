import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   
    return (
      <View
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={{paddingLeft: 25}}>
          <TouchableHighlight style={styles.boton} onPress={()=>this.props.navigation.navigate('Login')} >
            <Text style={{color: 'white'}}> Ingreso Administrativo </Text>
          </TouchableHighlight>
        </View>

        <View style={{paddingLeft: 25, paddingTop: 50}}>
          <TouchableHighlight
            style={styles.boton}
            onPress={()=>this.props.navigation.navigate('Registro')}>
            <Text style={{color: 'white'}}> Registro de postulantes </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: 'black',
    width: 300,
    height: 45,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
