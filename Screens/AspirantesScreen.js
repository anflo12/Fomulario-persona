import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UserList from '../Components/UserList';

export default class AspirantesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <UserList></UserList>
      </View>
    );
  }
}
