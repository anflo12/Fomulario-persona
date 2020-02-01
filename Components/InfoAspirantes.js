import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class InfoAspirantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        data:[]
    };
  }

  
  render() {
    return (
      <View>
        <Text> dfdzfsf{this.props.navigation.state.params.item.name} </Text>
      </View>
    );
  }
}
