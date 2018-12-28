import React, { Component } from 'react';
import { Container, Header, Body,Title, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';
import {Alert}  from 'react-native'
import Members from './member'
import Status from './status'
import Icon from 'react-native-vector-icons/Entypo';
import {getStatus,disconnect} from '../../action/socket' 
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
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="log-out" size={30} color="#ffff" onPress={this.alertLogout.bind(this)}/>
                </Button>
            </Right>
        </Header>
        <Tabs noShadow>
            <Tab heading="Tab1">
                <Status />
            </Tab>
            <Tab heading="Tab2">
                <Members />
            </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};

export default connect(null,{getStatus,disconnect})(OrgDash)