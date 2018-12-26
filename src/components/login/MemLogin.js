import React from 'react'
import {Animated, View} from 'react-native'
// import { Slider,Card,FormInput,FormLabel, Avatar} from 'react-native-elements';
import {Card,CardItem,Form, Label, Item, Input,List,ListItem, Thumbnail, Content, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={value:0}
    }
    render(){
        console.log(11111,this.props.transformX)
        return(
            < Animated.View style={{position:'absolute', flex:1, width:'100%', transform: [{ translateX: this.props.transformX }]}}>
            {/* <Card containerStyle={{justifyContent:'center', alignContent:'center', paddingTop:30,paddingBottom:30}}>
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
                <View style={{marginTop:10,
                    shadowOffset: { width: 10, height: 10 },  
                    shadowColor: 'black',  
                    shadowOpacity: 1,  
                    elevation: 3,  
                    zIndex:999  }}>
                    <FormLabel labelStyle={{textAlign:'center'}}>Organisation ID</FormLabel>
                    <FormInput
                        inputStyle={{textAlign:'center', borderBottomWidth: 2, borderBottomColor:'#f0f0f0',width:'100%'}}
                        placeholder='Enter your organisation ID'
                    />
                </View>
                <View style={{marginTop:10}}>
                    <FormLabel labelStyle={{textAlign:'center'}}>Member ID</FormLabel>
                    <FormInput
                        inputStyle={{textAlign:'center', borderBottomWidth: 2, borderBottomColor:'#f0f0f0',width:'100%'}}
                        placeholder='Enter your member ID'
                    />
                </View>
            </Card> */}
        <Card style={{flex: 1, paddingBottom:20, borderRadius:10}}>
            <CardItem style={{flexDirection:'column', height:80}}>
                <Thumbnail style={{position:'absolute',top:-80,height:150, width:150}} large  source={{uri: 'https://api.adorable.io/avatars/285/17BIT0319.jpg'}} />
            </CardItem>
            <CardItem>
                <Content>
                <Form>
                    <Item rounded style={{marginBottom:10}}>
                        <Label style={{marginLeft:10}}>
                            <Icon name="group" size={30} color="#000000" style={{marginLeft:100}}/>
                        </Label>
                        <Input placeholder='Enter your organisation ID'/>
                    </Item>
                    <Item rounded>
                        <Label style={{marginLeft:10}}>
                            <Icon name="person" size={30} color="#000000" style={{marginLeft:100}}/>
                        </Label>
                        <Input placeholder='Enter your Member ID'/>
                    </Item>
                </Form>
                </Content>
            </CardItem>
          </Card>
            </ Animated.View>
        )
    }
}