import React, { Component } from 'react';
import { 
    StyleSheet, 
    Alert,
    Image,
    View } from "react-native";
import { 
    Container,
    Header,
    Content,
    Body,
    Item, 
    Input, 
    Button,
    Text,
    Form } from "native-base";

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null
        }
    }

    componentDidMount() {
        Alert.alert("Welcome!", "Search One Piece characters on my personal collections!");
    }

    render() {
        return (
            <Container style={styles.container}>
                 <Content>
                 <Text>{`\n`}</Text>
                    <Form>
                      <Item rounded>
                          <Input placeholder='Enter name here..'
                              onChangeText={(text) => this.setState({ name: text })}
                              value={this.state.name}
                          />
                      </Item>
                    </Form>
                    <Text></Text>
                    <Body style={styles.alignButtons}>
                      <Button rounded onPress={() =>
                          this.props.navigation.navigate('CharacterScreen', this.state.name)}>
                          <Text>SEARCH</Text>
                      </Button>
                    </Body>
                    <Text>{`\n`}</Text>
                    <View>
                    <Image style={styles.sizeImage} source={require('../images/assets/luffy.png')} />
                    </View>
                </Content>
            </Container>
        );
    }
}

 const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
     alignButtons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
     },
     sizeImage:{
        flex: 1,
        width: 250,
        height: 300,
        resizeMode: 'contain'
     }
   });

export default HomeScreen;
