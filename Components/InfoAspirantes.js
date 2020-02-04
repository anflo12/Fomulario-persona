import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';

export default class InfoAspirantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  Delete_function = () => {
    let id = this.props.navigation.state.params.item.id_aspi;
    fetch('https://webapi1255.000webhostapp.com/borrarusuario.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        alert('eliminado');
        this.props.navigation.navigate('Aspirantes');
      })
      .catch(error => {
        console.error(error);
      });

   
  };
  render() {
    let data = this.props.navigation.state.params.item;
    
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <Text style={styles.text2}>Identificacion:</Text>
            <Text style={styles.text3}>{data.identificacion}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Nombre:</Text>
            <Text style={styles.text3}>{data.nombre}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Sexo:</Text>
            <Text style={styles.text3}>{data.sexo}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>F. nacimiento:</Text>
            <Text style={styles.text3}>{data.fecha}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Correo:</Text>
            <Text style={styles.text3}>{data.correo}</Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.text2}>Telefono:</Text>
            <Text style={styles.text3}>{data.telefono}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>Cargo:</Text>
            <Text style={styles.text3}>{data.cargo}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textcom}>Competencias:</Text>
            <Text style={styles.text3}>{data.competencias}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 10,
            }}>
            <Button
              title="Aceptar"
              color="green"
              onPress={() => {
                this.props.navigation.navigate('Aspirantes');
              }}
            />

            <Button
              title="Eliminar"
              color="red"
              onPress={() => {
                this.Delete_function();
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
    height: 80,
    paddingTop: 15,
    paddingLeft: 20,
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
    fontSize: 18,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  text3: {
    color: 'black',
    fontSize: 18,
    paddingLeft: 30,
  },
  textcom: {
    color: 'black',
    fontSize: 19,
    paddingRight: 20,
    paddingBottom: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
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
