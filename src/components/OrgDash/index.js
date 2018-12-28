import React, { Component } from 'react';
import { Container, View,Header, Body,Title, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';
import {Alert}  from 'react-native'
import Members from './member'
import Status from './status'
import Icon from 'react-native-vector-icons/Entypo';
import {getStatus,disconnect,doAttendance} from '../../action/socket' 
import {connect} from 'react-redux'

class OrgDash extends Component {
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
              {text: 'Close Lobby', onPress: this.props.disconnect}
            ],
            { cancelable: false }
          )
    }
    render() {
    return (
        <Container>
        <Header hasTabs noShadow >
            <Left/>
            <Body>
                <Title>Attendance App</Title>
                <Text note>Organisation View</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="log-out" size={30} color="#ffff" onPress={this.alertLogout.bind(this)}/>
                </Button>
            </Right>
        </Header>
        <Tabs noShadow>
            <Tab heading="Status">
                <Status />
            </Tab>
            <Tab heading="Members">
                <Members />
            </Tab>
        </Tabs>
        <Button style={{width:'100%',alignItems:'center'}} onPress={this.props.doAttendance}>
            <View style={{flex:1,alignItems:"center", width:'100%'}}><Text style={{color:'#fff'}}>{'Take Attendance'}</Text></View>
        </Button>
      </Container>
    );
  }
};

export default connect(null,{getStatus,disconnect,doAttendance})(OrgDash)