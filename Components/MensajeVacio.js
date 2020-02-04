import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
export default class MensajeVacio extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/originals/a0/29/93/a029936b63331ee16b0c4e360961cd09.jpg',
              }}
              style={{height: 200, width: null, flex: 1, paddingBottom: 20}}
            />
            <Text style={{color: 'red', fontSize: 30}}>
              No hay entrevistas para hoy
            </Text>
          </Card>
        </Content>
      </Container>
    );
  }
}
