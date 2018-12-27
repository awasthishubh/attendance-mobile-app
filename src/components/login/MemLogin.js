import React from 'react'
import {Animated} from 'react-native'
import {Card,CardItem,Form, Label, Item, Input, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {joinLobby} from '../../action/socket'
import {connect} from 'react-redux'

class MemLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={mem:'shubh',org:'acm'}
        this.props.send(()=>{
            console.log('sdsd',this.state)
            this.props.joinLobby(this.state.org,this.state.mem,71,71)
        })
    }
    render(){
        console.log('mem',this.props.zIndex)
        return(
            < Animated.View style={{zIndex:this.props.zIndex-2,position:'absolute', flex:1, width:'100%',shadowOpacity:0, opacity:this.props.opacity}}>
        <Card transparent style={{backgroundColor:'rgba(0, 0, 0, 0.3)',flex: 1, paddingBottom:20, borderRadius:10}}>
            <CardItem style={{flexDirection:'column', height:70, backgroundColor:'none'}} />
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
                    <Item rounded>
                        <Label style={{marginLeft:10}}>
                            <Icon name="person" size={30} color="#000000" style={{marginLeft:100}}/>
                        </Label>
                        <Input placeholder='Enter your Member ID'
                            value={this.state.mem}
                            onChangeText={(mem)=>this.setState({mem})}/>
                    </Item>
                </Form>
                </Content>
            </CardItem>
          </Card>
            </ Animated.View>
        )
    }
}

export default connect(null,{joinLobby})(MemLogin)