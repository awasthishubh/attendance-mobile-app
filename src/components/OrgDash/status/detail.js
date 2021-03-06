import React from 'react'
import {ListItem,Right, Content, Card, CardItem, Thumbnail, Text, Body} from 'native-base'

export default (props)=>{
    return(
        <Card style={{flex: 0}}>
            <CardItem style={{flexDirection:'column'}}>
                <Thumbnail source={{uri: `https://api.adorable.io/avatars/285/${props.org}.jpg`}} />
                <Text>{props.org}</Text>
            </CardItem>
            <CardItem>
                <Content>
                <ListItem style={{marginLeft:0}}>
                    <Body>
                        <Text>Total Members</Text>
                    </Body>
                    <Right>
                        <Text>{props.inRage+props.ouOfRange}</Text>
                    </Right>
                </ListItem>
                <ListItem style={{marginLeft:0}}>
                    <Body>
                        <Text>In Range</Text>
                    </Body>
                    <Right>
                        <Text>{props.inRage}</Text>
                    </Right>
                </ListItem>
                <ListItem last  style={{marginLeft:0, paddingLeft:0}}>
                    <Body>
                        <Text style={{color:'#ff0000'}}>Out of range</Text>
                    </Body>
                    <Right>
                        <Text style={{color:'#ff0000'}}>{props.ouOfRange}</Text>
                    </Right>
                </ListItem>
                </Content>
            </CardItem>
          </Card>
    )
}