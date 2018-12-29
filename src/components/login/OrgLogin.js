import React from 'react'
import {Slider,Animated} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Body,Card,CardItem,Form, Label, Item, Input, Content, Text,Right } from 'native-base';
import {createLobby} from '../../action/socket'
import {connect} from 'react-redux'

class OrgLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={thresholdDist:1, org:''}
        console.log(props)
        this.props.send(()=>{
            console.log('sdsd',this.state.thresholdDist)
            //Function to submit
            this.props.createLobby(this.state.org,this.state.thresholdDist,71,71)
        })
    }

    render(){
        console.log('org',this.props.zIndex)
        return(
            < Animated.View style={{zIndex:this.props.zIndex-2,position:'absolute', flex:1, width:'100%', shadowOpacity:0,opacity:this.props.opacity}}>
            <Card transparent={this.props.trns} style={{/*backgroundColor:'rgba(0, 0, 0, 0.3)',*/flex: 1, paddingBottom:20, borderRadius:10}}>
                <CardItem style={{backgroundColor:'none',flexDirection:'column', height:70}}>
                </CardItem>
                <CardItem style={{backgroundColor:'none'}}>
                    <Content>
                    <Form>
                        <Item rounded style={{marginBottom:10,marginBottom:10, borderColor :'#000',borderTopWidth:2,borderRightWidth:2,borderLeftWidth:2, borderBottomWidth:2 }}>
                            <Label style={{marginLeft:10}}>
                                <Icon name="group" size={30} color="#000" style={{marginLeft:100}}/>
                            </Label>
                            <Input placeholder='Enter your organisation ID' 
                                // placeholderTextColor="#e0e0e0"
                                style={{ color: "#000" }}
                                value={this.state.org}
                                onChangeText={(org)=>this.setState({org})}/>
                        </Item>
                    </Form>
                    </Content>
                </CardItem>
                <CardItem style={{backgroundColor:'none'}}>
                    <Body><Text style={{ color: "#000" }}>Threshold Distance</Text></Body>
                    <Right><Text style={{ color: "#000" }}>{this.state.thresholdDist} meters</Text></Right>
                </CardItem >
                <CardItem style={{backgroundColor:'none'}}>

                        <Slider
                            style={{ width: '100%', color:'#000'}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.thresholdDist}
                            maximumTrackTintColor='#000'  
                            minimumTrackTintColor='#000'
                            onValueChange={val => this.setState({ thresholdDist: val })}
                            // onSlidingComplete={ val => this.getVal(val)}
                        />
                </CardItem>
            </Card>
            </Animated.View>
        )
    }
}

export default connect(null,{createLobby})(OrgLogin)
