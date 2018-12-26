import React from 'react'
import {Slider,Animated} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Slider,Card,FormInput, Divider,FormLabel, Avatar, Button} from 'react-native-elements';
import {Body,Card,CardItem,Form, Label, Item, Input,List,ListItem, Thumbnail, Content, Text, Footer, FooterTab, Tab, Left, Button,Tabs,Right } from 'native-base';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={thresholdDist:1}
    }

    render(){
        return(
            <Animated.View style={{position:'absolute',width:'100%',transform: [{ translateX: this.props.transformX }]}}>
            {/* <Card containerStyle={{justifyContent:'center', alignContent:'center', paddingTop:50,paddingBottom:50}}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Avatar
                        large
                        rounded
                        source={{uri: "https://api.adorable.io/avatars/285/17BIT0876.jpg"}}
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
            </Card> */}
            <Card style={{flex: 1, paddingBottom:20, borderRadius:10}}>
                <CardItem style={{flexDirection:'column', height:80}}>
                    <Thumbnail style={{position:'absolute',top:-80,height:150, width:150}} large  source={{uri: 'https://awasthishubh.github.io/logos/app/team.png'}} />
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
                    </Form>
                    </Content>
                </CardItem>
                <CardItem>
                    <Body><Text>Threshold Distance</Text></Body>
                    <Right><Text>{this.state.thresholdDist} meters</Text></Right>
                </CardItem>
                <CardItem>

                        <Slider
                            style={{ width: '100%'}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.thresholdDist}
                            onValueChange={val => this.setState({ thresholdDist: val })}
                            // onSlidingComplete={ val => this.getVal(val)}
                        />
                </CardItem>
            </Card>
            </Animated.View>
        )
    }
}