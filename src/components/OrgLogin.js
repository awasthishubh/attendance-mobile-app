import React from 'react'
import {Animated,Text, View,LayoutAnimation} from 'react-native'
import { ListItem, Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider,Card,FormInput, Divider,FormLabel, Avatar, Button} from 'react-native-elements';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={value:0}
    }
    componentWillMount(){
        console.log(LayoutAnimation)
        
        LayoutAnimation.spring()
    }
    componentWillUpdate(){
        console.log(LayoutAnimation)
        
        LayoutAnimation.spring()
    }

    render(){
        return(
            <Animated.View style={{position:'absolute',width:'100%',transform: [{ translateX: this.props.transformX }]}}>
            <Card containerStyle={{justifyContent:'center', alignContent:'center', paddingTop:50,paddingBottom:50}}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Avatar
                        large
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        style={{padding:10}}
                    />
                </View>
                <View style={{marginTop:10}}>
                    <FormLabel labelStyle={{textAlign:'center'}}>Unique ID</FormLabel>
                    <FormInput
                        inputStyle={{textAlign:'center', borderBottomWidth: 2, borderBottomColor:'#f0f0f0',width:'100%'}}
                        placeholder='Enter your/organisation ID'
                    />
                </View>
                <View style={{alignItems: 'stretch', paddingLeft:30,paddingRight:30, marginTop:30}}>
                    <Slider maximumValue={100}
                        value={this.state.value}
                        onValueChange={(value) => this.setState({value:Math.floor(value)})} />
                    <Text>Threshold Distance: {this.state.value}</Text>
                </View>
            </Card>
            </Animated.View>
        )
    }
}