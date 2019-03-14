import React from 'react'
import {Left,Card,CardItem, Body,ListItem, Thumbnail, Content, Text, Right } from 'native-base';
import {connect} from 'react-redux'

class MemStatus extends React.Component{
    constructor(props){
        super(props)
    }
    errColor(i){
        if(i) return '#00ff00'
        else return '#ff0000'
    }

    render(){
        console.log(111,this.props)
        return(
        <Card style={{flex: 0}}>
            <CardItem style={{flexDirection:'column'}}>
                <Thumbnail source={{uri: 'https://api.adorable.io/avatars/285/17BIT0319.jpg'}} />
                <Text>{this.props.status.id}</Text>
            </CardItem>
            <CardItem>
                <Content>
                {/* <ListItem style={{marginLeft:0}}>
                    <Body style={{alignItems:'center'}}>
                        <Text style={{color:this.errColor(this.props.status.connected)}}>
                            {this.state.connected?'Connected':'Disconnected'}
                        </Text>
                    </Body>
                </ListItem> */}
                <ListItem style={{marginLeft:0, paddingLeft:0}}>
                    <Body>
                        <Text>Connected to</Text>
                    </Body>
                    <Right>
                        <Text>{this.props.status.organisation}</Text>
                    </Right>
                </ListItem>
                <ListItem style={{marginLeft:0}}>
                    <Body style={{alignItems:'center'}}>
                        <Text style={{color:this.errColor(this.props.status.inRange)}}>
                            {this.props.status.inRange?'In Range':'Out of Range'}
                        </Text>
                    </Body>
                </ListItem>
                <ListItem last  style={{marginLeft:0, paddingLeft:0}}>
                    <Left style={{flex:1}}>
                        <Text>Distance</Text>
                    </Left>
                    <Right style={{flex:1}}>
                        <Text>{Math.round(this.props.status.distance* 100) / 100}</Text>
                    </Right>
                </ListItem>
                </Content>
            </CardItem>
          </Card>
        )
    }
}

function mapStateToProps(state){
    console.log(22,state.memState)
    return({status:state.memState})
}
export default connect(mapStateToProps)(MemStatus)