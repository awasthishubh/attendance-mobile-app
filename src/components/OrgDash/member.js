import React from 'react'
import { Container, Separator, Body,List,ListItem, Thumbnail, Content, Text, Left,Right } from 'native-base';
import {LayoutAnimation} from 'react-native'
import {connect} from 'react-redux'

class MembersView extends React.Component{
    constructor(props){
        super(props)
        this.data=[{name:'asd',dist:12},{name:'dfvd',dist:42},{name:'dvdb',dist:34},{name:'bng',dist:12}]
        this.errdata=[{name:'asd',dist:12},{name:'dfvd',dist:42},{name:'dvdb',dist:34},{name:'bng',dist:12}]
        console.log(this.props)
    }
    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderList(item, tint){
        return(
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: `https://api.adorable.io/avatars/285/${item.reg}.jpg` }} />
                </Left>
                <Body style={{flexDirection:'row',paddingRight:20}}>
                    <Body>
                        <Text>{item.reg}</Text>
                    </Body>
                    <Right>
                        <Text style={{color:tint}}>{Math.round(item.dist* 100) / 100}m</Text>
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
                    <List dataArray={this.props.members.inRange} renderRow={(i)=>this.renderList(i,'#00ff00')}/>
                    <Separator bordered>
                        <Text>Out of Range</Text>
                    </Separator>
                    <List dataArray={this.props.members.outOfRange} renderRow={(i)=>this.renderList(i,'#ff0000')}/>
                </Content>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return {members:state.orgState.members}
}
export default connect(mapStateToProps)(MembersView)