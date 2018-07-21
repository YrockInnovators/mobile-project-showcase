import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Spinner
} from "native-base";
import { ActivityIndicator, StyleSheet, View, Modal } from 'react-native'

class CharacterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      name: this.props.navigation.state.params,
      loading: true,
      showLoader: true
    };
  }

  getData() {
    let nameChecker = this.state.name;

    if (nameChecker == undefined) {
      nameChecker = null;
    }

    setTimeout(() => {
      fetch("http://192.168.1.134:3000/api/v1/items?name=" + nameChecker) //IP address of my local computer w RAILS API
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          this.setState({
            dataSource: responseJson.data
          });
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);
  }

  componentDidMount() {
    this.getData();
    this.setState({
      loading: false
    });
  }

 firstName() {
    if (this.state.dataSource.length > 0) {
      return this.state.dataSource.map(data => {
        return (
            <Card key={data.id}>
            <CardItem header bordered>
              <Text>{data.firstname}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Devil Fruit: {data.lastname}</Text>
              </Body>
            </CardItem>
            </Card>
        );
      });
    }

   if (this.state.dataSource.length <= 0) {
     return (
       <Content padder>
         <Card>
           <CardItem header bordered>
             <Text>Character not found</Text>
           </CardItem>
           <CardItem bordered>
             <Body>
               <Text>No Data Available!</Text>
             </Body>
           </CardItem>
         </Card>
       </Content>
     );
   }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showLoader: false
      });
    }, 3000)
  }

  render() {
        return (
            <Container>
              <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.showLoader}
              onRequestClose={() => {console.log('closing')}}
              >
              <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  { this.state.showLoader ? <ActivityIndicator size="large" /> : null}
                </View>
              </View>
              </Modal>
                <Content padder>
                {this.firstName()}
                </Content>
             </Container>
             );
  }
}

var styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default CharacterScreen;
