import React from 'react'
import {Dimensions,Animated,TouchableOpacity,Image,ImageBackground} from 'react-native'
import { View, Container, Header, Title, Button, Left, Right, Body, Text } from 'native-base';
import OrgLogin from './OrgLogin'
import MemLogin from './MemLogin'

FooterButton=function(props){
    return(
        <Button style={{width:'100%',alignItems:'center'}} onPress={props.onPress}>
            <View style={{flex:1,alignItems:"center", width:'100%'}}><Text style={{fontWeight:'900', color:'#fff'}}>{props.text}</Text></View>
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
            joinLob:null,
            yTrnsLogo: new Animated.Value(120),
            memTrns:false,
            orgTrns:false
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
        if(i){
            this.setState({orgTrns:true})
            this.setState({memTrns:false})
        }else{
            this.setState({memTrns:true})
            this.setState({orgTrns:false})
        }
        console.log('wcewecwevwevwv',this.state)
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
        Animated.spring(
            this.state.yTrnsLogo,
            {
                duration: 1000,  
                toValue: 0,
                useNativeDriver: true
            }
        ).start()
    }
    render(){
        a=(Dimensions.get('window').width-45)/2-140
        b=(Dimensions.get('window').width-45)/2
        console.log(a)
        return(
            // <ImageBackground source={require('../../resources/wall.jpg')} style={{width: '100%', height: '100%'}}>
            <Container style={{backgroundColor:'#e0e0e0'}}>
                <Header>
                    <Left/>
                    <Body>
                        <Title style={{fontWeight:'900'}}>Attendance App</Title>
                    </Body>
                    <Right />
                </Header>

                <Animated.View style={{transform: [{translateY:this.state.yTrnsLogo}],flex:1,paddingLeft:30,paddingRight:30}}>
                    <View style={{flex:3, justifyContent:'center', alignItems:'center'}} >
                            {(()=>{
                                if(this.state.memberView===null) return<Text style={{color:'#000',fontWeight:'900',fontSize:25}}>Choose To Continue</Text>
                                else return <Text/>
                            })()}
                    </View>

                    <View style={{position:'relative'}}>
                            <TouchableOpacity onPress={()=>this.imgPress(false)} style={{zIndex:this.state.zMem,position:'absolute',top:-60,left:a}}>
                                <Image style={{elevation:4, height:120, width:120}} source={require('../../resources/team.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.imgPress(true)} style={{zIndex:this.state.zOrg,position:'absolute',top:-60,left:b}}>
                                <Image style={{height:120, width:120}} source={require('../../resources/user.png')} />
                            </TouchableOpacity>
                        <MemLogin trns={this.state.memTrns} send={this.joinLob.bind(this)} opacity={this.state.opacityMem} zIndex={this.state.zOrg}/>
                        <OrgLogin trns={this.state.orgTrns} send={this.createLob.bind(this)} opacity={this.state.opacityOrg} zIndex={this.state.zMem}/>
                    </View>
                    <View style={{flex:6}} />
                    </Animated.View>
            {this.butttonText()}
            </Container>
            /* </ImageBackground> */
        )
    }
}