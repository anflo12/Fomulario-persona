import React, {Component} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import UsersItems from './UsersItems';
import MensajeVacio from './MensajeVacio';
import FetchingIndicator from 'react-native-fetching-indicator';
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
    };
  }
  componentDidMount() {
    this.Usuarios();
  }
  async Usuarios() {
    try {
      let response = await fetch(
        'https://webapi1255.000webhostapp.com/consultausuarios.php',
      );
      let datap = await response.json();

      this.setState({data: datap});
      if (this.state.data) {
        this.setState({isFetching: false});
      }
    } catch (error) {
      console.log('fallo');
    }
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.Usuarios().then(() => {
      this.setState({ refreshing: false });
    });
  }


  render() {

    
    if (this.state.data.length == 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <MensajeVacio></MensajeVacio>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, marginTop: 5}}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <UsersItems
                item={item}
                index={index}
                nav={this.props.navigation}
              />
            )}
            keyExtractor={(item, index) => index + ''}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          />
          <FetchingIndicator
            isFetching={this.state.isFetching}
            message="Cargando"
            color="blue"
          />
        </View>
      );
    }
  }
}
