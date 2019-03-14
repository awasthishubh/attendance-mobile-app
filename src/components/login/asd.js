import React from 'react'
import {LayoutAnimation,Dimensions,Animated} from 'react-native'
import { View, Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import OrgLogin from './OrgLogin'
import MemLogin from './MemLogin'
import GestureRecognizer from 'react-native-swipe-gestures';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={memScreen:null,
            XtrnsMem: new Animated.Value(Dimensions.get('window').width),
            XtrnsOrg: new Animated.Value(-1*Dimensions.get('window').width)}
    }
    swipe(right){
        width=Dimensions.get('window').width
        console.log(this.state.Xtrns)
        toValueMem=right==true?0:width
        toValueOrg=right==true?-1*width:0
        Animated.spring(
            this.state.XtrnsMem,
            {
                duration: 1000,  
                toValue: toValueMem,
                useNativeDriver: true
            }
          ).start()
        Animated.spring(
            this.state.XtrnsOrg,
            {
                duration: 1000,  
                toValue: toValueOrg,
                useNativeDriver: true
            }
          ).start()
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        if(right==true){
            this.setState({memScreen:true})
        } else this.setState({memScreen:false})
        console.log(this.state);
        
    }
    render(){
        console.log(this.state)
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <GestureRecognizer 
                    style={{flex: 1,backgroundColor: '#00ff00', paddingLeft:30,paddingRight:30}}
                    gestureIsClickThreshold={3}
                    onSwipeLeft={()=>this.swipe(true)}
                    onSwipeRight={()=>this.swipe(false)}
                >
                    <View style={{flex:1}} ></View>
                    <View style={{position:'relative'}}>
                        <MemLogin transformX={this.state.XtrnsMem}/>
                        <OrgLogin transformX={this.state.XtrnsOrg}/>
                    </View>
                    <View style={{flex:3}} ></View>
                </GestureRecognizer>
                <Footer>
                    <FooterTab>
                        <Button full>
                        <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}