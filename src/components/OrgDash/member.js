import React from 'react'
// import {View, Text} from 'native-base'
import { Container, Separator, Body,List,ListItem, Thumbnail, Content, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';

export default class app extends React.Component{
    constructor(props){
        super(props)
        this.data=[{name:'asd',dist:12},{name:'dfvd',dist:42},{name:'dvdb',dist:34},{name:'bng',dist:12}]
        this.errdata=[{name:'asd',dist:12},{name:'dfvd',dist:42},{name:'dvdb',dist:34},{name:'bng',dist:12}]
    }
    renderList(item, tint){
        return(
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: `https://api.adorable.io/avatars/285/${item.name}.jpg` }} />
                </Left>
                <Body style={{flexDirection:'row',paddingRight:20}}>
                    <Body>
                        <Text>{item.name}</Text>
                    </Body>
                    <Right>
                        <Text style={{color:tint}}>{item.dist}</Text>
                    </Right>
                </Body>
            </ListItem>
        )
    }
    render(){
        return(
            <Container>
                <Content>
                    <Separator bordered>
                        <Text>In Range</Text>
                    </Separator>
                    <List dataArray={this.data} renderRow={(i)=>this.renderList(i,'#00ff00')}/>
                    <Separator bordered>
                        <Text>Out of Range</Text>
                    </Separator>
                    <List dataArray={this.errdata} renderRow={(i)=>this.renderList(i,'#ff0000')}/>
                </Content>
            </Container>
        )
    }
}