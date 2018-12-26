import React from 'react'
import {Card,CardItem,Header, Container, Title, Body,List,ListItem, Thumbnail, Content, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
export default class app extends React.Component{
    constructor(){
        super()
        this.state={connected:true, inRange:true}
    }
    errColor(i){
        if(i) return '#00ff00'
        else return '#ff0000'
    }

    render(){
        return(
        <Card style={{flex: 0}}>
            <CardItem style={{flexDirection:'column'}}>
                <Thumbnail source={{uri: 'https://api.adorable.io/avatars/285/17BIT0319.jpg'}} />
                <Text>17BIT0319</Text>
            </CardItem>
            <CardItem>
                <Content>
                <ListItem style={{marginLeft:0}}>
                    <Body style={{alignItems:'center'}}>
                        <Text style={{color:this.errColor(this.state.connected)}}>
                            {this.state.connected?'Connected':'Disconnected'}
                        </Text>
                    </Body>
                </ListItem>
                <ListItem style={{marginLeft:0}}>
                    <Body style={{alignItems:'center'}}>
                        <Text style={{color:this.errColor(this.state.inRange)}}>
                            {this.state.inRange?'In Range':'Out of Range'}
                        </Text>
                    </Body>
                </ListItem>
                <ListItem last  style={{marginLeft:0, paddingLeft:0}}>
                    <Body>
                        <Text>Distance</Text>
                    </Body>
                    <Right>
                        <Text>3</Text>
                    </Right>
                </ListItem>
                </Content>
            </CardItem>
          </Card>
    )
        }
}