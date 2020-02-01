import React, {Component} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import UsersItems from './UsersItems';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
componentDidMount(){
    this.getCellphones()
}
  async getCellphones() {
    try {
      let response = await fetch(
        'https://webapi343334.000webhostapp.com/consultausuarios.php',
      );
      let data = await response.json();
      this.setState({data: data});
    } catch (error) {
      alert('fallo');
    }
  }

  render() {
    return (
      <View style={{flex: 1,marginTop:5}}>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => (
            <UsersItems item={item} index={index}  nav={this.props.navigation}/>
          )}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
    );
  }
}
