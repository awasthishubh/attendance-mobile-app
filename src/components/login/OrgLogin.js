import React from 'react'
import {Slider,Animated} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Body,Card,CardItem,Form, Label, Item, Input, Content, Text,Right } from 'native-base';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={thresholdDist:1, org:''}
        console.log(props)
        this.props.send(()=>{
            console.log('sdsd',this.state.thresholdDist)
            //Function to submit
        })
    }

    render(){
        console.log('org',this.props.zIndex)
        return(
            < Animated.View style={{zIndex:this.props.zIndex-2,position:'absolute', flex:1, width:'100%', shadowOpacity:0,opacity:this.props.opacity}}>
            <Card transparent style={{backgroundColor:'rgba(0, 0, 0, 0.3)',flex: 1, paddingBottom:20, borderRadius:10}}>
                <CardItem style={{backgroundColor:'none',flexDirection:'column', height:70}}>
                </CardItem>
                <CardItem style={{backgroundColor:'none'}}>
                    <Content>
                    <Form>
                        <Item rounded style={{marginBottom:10}}>
                            <Label style={{marginLeft:10}}>
                                <Icon name="group" size={30} color="#000000" style={{marginLeft:100}}/>
                            </Label>
                            <Input placeholder='Enter your organisation ID' 
                                value={this.state.org}
                                onChangeText={(org)=>this.setState({org})}/>
                        </Item>
                    </Form>
                    </Content>
                </CardItem>
                <CardItem style={{backgroundColor:'none'}}>
                    <Body><Text>Threshold Distance</Text></Body>
                    <Right><Text>{this.state.thresholdDist} meters</Text></Right>
                </CardItem >
                <CardItem style={{backgroundColor:'none'}}>

                        <Slider
                            style={{ width: '100%'}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.thresholdDist}
                            onValueChange={val => this.setState({ thresholdDist: val })}
                            // onSlidingComplete={ val => this.getVal(val)}
                        />
                </CardItem>
            </Card>
            </Animated.View>
        )
    }
}