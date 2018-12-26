import React from 'react'
import {Container, View,ListItem,Right,Header, Content, Card, Image, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base'
import {Slider} from 'react-native'

export default class app extends React.Component{
    constructor(props){
        super(props)
        this.state = { thresholdDist: 18 }
    }
    getVal(val){
        console.log(val)
    }
    render(){
        return(
              <Card>
                <CardItem header bordered>
                    <Body><Text>Threshold Distance</Text></Body>
                    <Right><Text>{this.state.thresholdDist}m</Text></Right>
                  
                </CardItem>
                <CardItem bordered>
                    <Body style={{marginBottom:20}}>
                        <Slider
                            style={{ width: '100%'}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.thresholdDist}
                            onValueChange={val => this.setState({ thresholdDist: val })}
                            onSlidingComplete={ val => this.getVal(val)}
                        />
                    </Body>
                </CardItem>
              </Card>
        )
    }
}
a=1
