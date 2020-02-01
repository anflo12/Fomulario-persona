import React, {Component} from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';


export default class UsersItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let items = this.props.item;
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 110,
          backgroundColor: '#7fb5b5',
          padding: 9,
          marginBottom: 10,
          elevation: 10,
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => this.props.nav.navigate('Informacion',{ item: items })}>
          <Image
            style={{
              borderRadius: 100,
              width: 70,
              height: 70,
              paddingTop: 10,
              backgroundColor: 'gray',
            }}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/896/896866.png',
            }}
          />
        </TouchableOpacity>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}> Nombre: </Text>
            <Text style={{fontSize: 20}}> {items.name}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}> Edad: </Text>
            <Text style={{fontSize: 16}}> {items.edad}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {' '}
              Correo electronico:{' '}
            </Text>
            <Text style={{fontSize: 16}}> {items.correo}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {' '}
              Cargo al cual se postula:{' '}
            </Text>
            <Text style={{fontSize: 16}}> {items.cargo}</Text>
          </View>
        </View>
      </View>
    );
  }
}
