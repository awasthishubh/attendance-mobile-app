import React from 'react'
import {Text, View, LayoutAnimation,Dimensions,Animated} from 'react-native'
import {Button,Header,} from 'react-native-elements';
import OrgLogin from './components/OrgLogin'
import MemLogin from './components/MemLogin'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={memScreen:null,
            XtrnsMem: new Animated.Value(Dimensions.get('window').width),
            XtrnsOrg: new Animated.Value(-1*Dimensions.get('window').width)}
    }e(right){
        width=Dimensions.get('window').width
        console.log(this.state.Xtrns)
        toValueMem=right==true?0:width
        toValueOrg=right==true?-1*width:0
        Animated.spring(
            this.state.XtrnsMem,
            {
                duration: 200,  
                toValue: toValueMem,
            }
          ).start()
        Animated.spring(
            this.state.XtrnsOrg,
            {
                duration: 500,  
                toValue: toValueOrg,
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
            <View style={{flex:1}}>
                <Header
                    // outerContainerStyles={{shadowOffset: { width: 0, height: 0 },  
                    //     shadowColor: 'black',  
                    //     shadowOpacity: 1,  
                    //     elevation: 3,  
                    //     zIndex:999,
                    // }}
                    backgroundColor='#0044A9'
                    centerComponent={{ text: 'Attendance App', style: { color: '#fff', fontSize:25 } }}
                />
                <GestureRecognizer style={{flex: 1,backgroundColor: '#00ff00'}} gestureIsClickThreshold={3}
                    onSwipeLeft={()=>this.swipe(true)}
                    onSwipeRight={()=>this.swipe(false)}
                    >
                    <View style={{flex:1}} ></View>
                    <View style={{position:'relative'}}>
                    {/* {this.loginComp()} */}
                        <MemLogin transformX={this.state.XtrnsMem}/>
                        <OrgLogin transformX={this.state.XtrnsOrg}/>
                    </View>
                    <View style={{flex:7}} ></View>
                </GestureRecognizer>
                <Button
                    containerViewStyle={{marginLeft:0,marginRight:0}}
                    raised
                    icon={{name: 'send'}}
                    title='Swipe to conntinue'
                    backgroundColor='#0044A9'
                />
            </View>
        )
    }
}