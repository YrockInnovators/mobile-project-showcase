import React from 'react';
import { StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {
  Container,
  Header,
  Title,
  Body,
  Left,
  Right
} from "native-base";
import HomeScreen from './components/HomeScreen';
import CharacterScreen from './components/CharacterScreen';

export default class App extends React.Component {

  render() {
    return (
      <Container>
       <Header>
         <Body  style={styles.container} >
           <Title>One Piece Characters</Title>
         </Body>
       </Header>
        <AppNavigator />
      </Container>
    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  CharacterScreen: { screen: CharacterScreen }
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
