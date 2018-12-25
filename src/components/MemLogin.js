import React from 'react'
import {Text, View} from 'react-native'
import { Slider,Card,FormInput,FormLabel, Avatar} from 'react-native-elements';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={value:0}
    }
    render(){
        return(
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
            </Card>
        )
    }
}