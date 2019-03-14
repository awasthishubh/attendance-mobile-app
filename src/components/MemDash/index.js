import React from 'react'
import {Alert} from 'react-native'
import {Header, Container, Title, Body, Text, Footer, FooterTab, Left, Button,Right, View } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Status from './Status'
import {getStatus,disconnect} from '../../action/socket'
import {connect} from 'react-redux'

class MemDash extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props)
    }
    componentWillMount(){
        this.props.getStatus()
    }
    alertLogout(){
        Alert.alert(
            'Logout?',
            'Are you sure you want to close lobby?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Exit Lobby', onPress: this.props.disconnect}
            ],
            { cancelable: false }
          )
    }
    render(){
        return(
            <Container style={{backgroundColor:'#e0e0e0'}}>
        <Header>
            <Left/>
            <Body>
                <Title>Attendance App</Title>
                <Text note>Member View</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="log-out" size={30} color="#ffff" onPress={this.alertLogout.bind(this)}/>
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

export default connect(null,{getStatus,disconnect})(MemDash)
