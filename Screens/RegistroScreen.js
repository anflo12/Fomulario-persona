import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Textarea from 'react-native-textarea';
import {ScrollView} from 'react-native-gesture-handler';
export default class RegistroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: '',
      sexo: '',
      fecha: '',
      correo: '',
      cargo:'',
      telefono: 0,
      competencias: '',
    };
  }
  registration_Function = () => {
    fetch('https://webapi343334.000webhostapp.com/registro.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identificacion: parseInt(this.state.id),
        name: this.state.nombre,
        sexo: this.state.sexo,
        fecha: this.state.fecha.toString(),
        correo: this.state.correo,
        telefono: parseInt(this.state.telefono),
        cargo: this.state.cargo,
        competencias:
          this.state.competencias,
      },)
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        console.log('enviado');
      })
      .catch(error => {
        console.error(error);
      });
  };

  Validate_Function = () => {
    if (this.state.id.length < 10 || this.state.id.length > 10) {
      alert('la identificacion no cumple con la longuitud');
      console.log('id');
    } else if (
      this.state.telefono.length < 12 ||
      this.state.telefono.length > 12
    ) {
      alert('la telefono no cumple con la longuitud');
      console.log('tel');
    } else {
      this.registration_Function();
      console.log('ok');
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <Text style={styles.text2}>Identificacion:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="number-pad"
              onChangeText={id => this.setState({id})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Nombre:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              onChangeText={nombre => this.setState({nombre})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Sexo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="email-address"
              onChangeText={sexo => this.setState({sexo})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>F. nacimiento:</Text>
            <TextInput
              style={styles.text1}
              keyboardType=""
              onChangeText={fecha => this.setState({fecha})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Correo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              onChangeText={correo => this.setState({correo})}
              selectionColor="white"
            />
          </View>

          <View style={styles.container2}>
            <Text style={styles.text2}>Telefono:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="number-pad"
              onChangeText={telefono => this.setState({telefono})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Cargo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              onChangeText={cargo => this.setState({cargo})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={competencias => this.setState({competencias})}
              defaultValue={this.state.competencias}
              maxLength={250}
              placeholder={'Escribe aqui tus competencias'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 10,
            }}>
            <Button
              title="Guardar"
              color="#7fb5b5"
              onPress={() => {
                this.Validate_Function();
              }}
            />

            <Button
              title="Cancelar"
              color="#7fb5b5"
              onPress={() => {
                alert('Cancelar');
              }}
            />
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
    backgroundColor: 'white',
    borderWidth: 2,
  },
  textarea: {
    textAlignVertical: 'top',
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
    paddingTop: 15,
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  text1: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    textAlign: 'center',
    color: 'black',
    height: 33,
    width: 200,
    fontSize: 12,
  },

  text2: {
    color: 'black',
    fontSize: 12,
    paddingRight: 20,
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
