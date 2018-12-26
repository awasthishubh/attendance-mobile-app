import React from 'react'
import {Dimensions,Animated} from 'react-native'
import {Thumbnail, View, Container, Header, Title, Button, Left, Right, Body, Text } from 'native-base';
import OrgLogin from './OrgLogin'
import MemLogin from './MemLogin'

FooterButton=function(props){
    return(
        <Button style={{width:'100%',alignItems:'center'}} onPress={props.onPress}>
            <View style={{flex:1,alignItems:"center", width:'100%'}}><Text style={{color:'#fff'}}>{props.text}</Text></View>
        </Button>
    )
}

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            memScreen:null,
            opacityMem: new Animated.Value(0),
            opacityOrg: new Animated.Value(0),
            memberView: null,
            zOrg: 100,
            zMem: 100,
            createLob:null,
            joinLob:null
        }
    }
    createLob(v){
        this.setState({createLob:v})
    }
    joinLob(v){
        this.setState({joinLob:v})
    }
    
    butttonText(){
        if(this.state.memberView===null) return <FooterButton/>
        if(this.state.memberView===true) return <FooterButton text='Join Lobby' onPress={this.state.joinLob}/>
        else return <FooterButton text='Create Lobby' onPress={this.state.createLob}/>
    }
    imgPress(i){
        toMem=i?1:0
        toOrg=i?0:1
        this.setState({memberView:i})
        this.setState({zOrg:i?100:1,zMem:i?1:100})
        Animated.spring(
            this.state.opacityMem,
            {
                duration: 1000,  
                toValue: toMem,
                useNativeDriver: true
            }
          ).start()
          Animated.spring(
            this.state.opacityOrg,
            {
                duration: 1000,  
                toValue: toOrg,
                useNativeDriver: true
            }
          ).start()
    }
    render(){
        a=(Dimensions.get('window').width-45)/2-140
        b=(Dimensions.get('window').width-45)/2
        console.log(a)
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{flex:1,paddingLeft:30,paddingRight:30}}>
                    <View style={{flex:3, justifyContent:'center', alignItems:'center'}} >
                            {(()=>{
                                if(this.state.memberView===null) return<Text h2>Choose To Continue</Text>
                                else return <Text/>
                            })()}
                        </View>
                    <View style={{position:'relative'}}>
                        <Button onPress={()=>this.imgPress(false)} transparent  style={{height:120, width:120,zIndex:this.state.zMem,position:'absolute',top:-60,left:a}}>
                            <Thumbnail style={{height:120, width:120}} large  source={{uri: 'https://awasthishubh.github.io/logos/app/team.png'}} />
                        </Button>
                        <Button onPress={()=>this.imgPress(true)} transparent style={{height:120, width:120,zIndex:this.state.zOrg,position:'absolute',top:-60,left:b}}>
                            <Thumbnail style={{height:120, width:120}} large  source={{uri: 'https://awasthishubh.github.io/logos/app/user.png'}} />
                        </Button>
                        <MemLogin send={this.joinLob.bind(this)} opacity={this.state.opacityMem} zIndex={this.state.zOrg}/>
                        <OrgLogin send={this.createLob.bind(this)} opacity={this.state.opacityOrg} zIndex={this.state.zMem}/>
                    </View>
                    <View style={{flex:6}} />
                </View>
                {/* <Footer>
                    <FooterTab>
                    <Button block>
            {this.butttonText()}
          </Button>
                    </FooterTab>
                </Footer> */}
            {this.butttonText()}
            </Container>
        )
    }
}