import React from 'react'
import {Alert} from 'react-native'
import {Header, Container, Title, Body, Text, Footer, FooterTab, Left, Button,Right, View } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Status from './Status'
export default class app extends React.Component{
    alertLogout(){
        Alert.alert(
            'Logout?',
            'Are you sure you want to close lobby?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Exit Lobby', onPress: () => console.log('Logged out')}
            ],
            { cancelable: false }
          )
    }
    render(){
        return(
            <Container>
        <Header>
            <Left/>
            <Body>
                <Title>Attendance App</Title>
                <Text note>Member View</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="log-out" size={30} color="#ffff" onPress={this.alertLogout}/>
                </Button>
            </Right>
        </Header>
        <View style={{flex:1,justifyContent:'center', paddingLeft:30, paddingRight:30}}>
            <Status/>
        </View>
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Waiting for Attendance</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
        )
    }
}