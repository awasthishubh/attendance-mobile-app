import React, { Component } from 'react';
import { Container, Header, Body,Title, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';
import {Alert}  from 'react-native'
import Members from './member'
import Status from './status'
import Icon from 'react-native-vector-icons/Entypo';
import {getStatus} from '../../action/socket'
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
              {text: 'Close Lobby', onPress: () => console.log('Logged out')}
            ],
            { cancelable: false }
          )
    }
    render() {
        console.log(this.props.orgState)
    return (
        <Container>
        <Header hasTabs noShadow >
            <Left/>
            <Body>
                <Title>Attendance App</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="log-out" size={30} color="#ffff" onPress={this.alertLogout}/>
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

function mapStateToProps(state){
    return{
        orgState:state.orgState
    }
}

export default connect(mapStateToProps,{getStatus})(OrgDash)