import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import Textarea from 'react-native-textarea';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class ActualizarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: '',
      sexo: '',
      correo: '',
      cargo: '',
      telefono: 0,
      competencias: '',
      date: new Date(),
      mode: 'date',
      show: false,
      thedate: '',
    };
  }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      thedate: this.state.date.toISOString().slice(0, 10),
      show: true,
      mode,
    });
  };

  showDatepicker = () => {
    this.show('date');
  };

  ActualizarInfo = () => {
    let id = this.props.navigation.state.params.item.id_aspi;
    fetch('https://webapi1255.000webhostapp.com/actualizarinformacion.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_aspi: id,
        id: parseInt(this.state.id),
        name: this.state.nombre,
        sexo: this.state.sexo,
        correo: this.state.correo,
        fecha: this.state.thedate,
        telefono: parseInt(this.state.telefono),
        cargo: this.state.cargo,
        competencias:
         this.state.competencias,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        let data = responseJson;
        console.log('fdfsd');
        alert('Informacion actualizada');
      })
      .catch(error => {
        console.log(error);
      });
  };

  async Usuarios() {
    let id = this.props.navigation.state.params.item.id_aspi;
    fetch('https://webapi1255.000webhostapp.com/infoAspirante.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_aspi: id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        let data = responseJson.data;
        console.log('ggg', data.identificacion);
        this.setState({
          id: data.identificacion,
          nombre: data.nombre,
          sexo: data.sexo,
          correo: data.correo,
          cargo: data.cargo,
          thedate: data.fecha,
          telefono: data.telefono,
          competencias: data.competencias,
        });
      })

      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.Usuarios();
  }
  render() {
    const {show, date, mode, id, telefono} = this.state;

    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <Text style={styles.text2}>Identificacion:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="number-pad"
              value={this.state.id.toString()}
              onChangeText={id => this.setState({id})}
              selectionColor="white"
            />
          </View>
          
          <View style={styles.container2}>
            <Text style={styles.text2}>Nombre:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              value={this.state.nombre}
              onChangeText={nombre => this.setState({nombre})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Sexo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="email-address"
              value={this.state.sexo}
              onChangeText={sexo => this.setState({sexo})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>F. nacimiento:</Text>
            <TouchableOpacity onPress={this.showDatepicker}>
              <Text style={{textDecorationLine: 'underline'}}>Abrir</Text>
            </TouchableOpacity>
            <Text>{this.state.thedate}</Text>

            {show && (
              <DateTimePicker
                value={date}
                mode={mode}
                minimumDate={new Date(1950, 0, 1)}
                is24Hour={true}
                display="calendar"
                onChange={this.setDate}
              />
            )}
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Correo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              value={this.state.correo}
              onChangeText={correo => this.setState({correo})}
              selectionColor="white"
            />
          </View>

          <View style={styles.container2}>
            <Text style={styles.text2}>Telefono:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="number-pad"
              value={this.state.telefono.toString()}
              onChangeText={telefono => this.setState({telefono})}
              selectionColor="white"
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Cargo:</Text>
            <TextInput
              style={styles.text1}
              keyboardType="default"
              value={this.state.cargo}
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
              title="Actualizar"
              color="#7fb5b5"
              onPress={() => {
                this.ActualizarInfo();
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
