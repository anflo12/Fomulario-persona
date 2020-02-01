import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Textarea from 'react-native-textarea';
import {ScrollView} from 'react-native-gesture-handler';
export default class RegistroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <View style={styles.container2}>
            <Text style={{paddingLeft: 10, color: 'white', paddingRight: 18}}>
              Nombre:
            </Text>
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
            <Text style={{paddingLeft: 14, color: 'white', paddingRight: 18}}>
              Sexo:
            </Text>
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
            <Text style={{paddingLeft: 14, color: 'white', paddingRight: 18}}>
              F. nacimiento:
            </Text>
            <TextInput
              style={styles.text1}
              placeholderTextColor="white"
              keyboardType="default"
              placeholder="Ingresa usuario"
              onChangeText={User => this.setState({User})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={{paddingLeft: 14, color: 'white', paddingRight: 18}}>
              Correo:
            </Text>
            <TextInput
              style={styles.text1}
              placeholderTextColor="white"
              keyboardType="default"
              placeholder="Ingresa usuario"
              onChangeText={User => this.setState({User})}
              selectionColor="white"
            />
          </View>

          <View style={styles.container2}>
            <Text style={{paddingLeft: 14, color: 'white', paddingRight: 18}}>
              Telefono:
            </Text>
            <TextInput
              style={styles.text1}
              placeholderTextColor="white"
              keyboardType="number-pad"
              placeholder="Ingresa usuario"
              onChangeText={User => this.setState({User})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={250}
              placeholder={'Escribe aqui tus competencias'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Button title="Guardar" color="black" onPress={()=>{alert("guardado")}}/>

            <Button title="Cancelar" color="black " onPress={()=>{alert("Cancelar")}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: 'gray',
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  containerlogin: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'blue',
  },
  container2: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
    paddingLeft: 20,
  },
  text1: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'white',
    textAlign: 'center',
    color: 'white',
    height: 33,
    width: 200,
    fontSize: 12,
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
