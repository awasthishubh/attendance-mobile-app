import React from 'react'
import {Text, View} from 'react-native'
import {Button,Header} from 'react-native-elements';
import OrgLogin from './components/OrgLogin'


export default class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    backgroundColor='#0044A9'
                    centerComponent={{ text: 'Attendance App', style: { color: '#fff', fontSize:25 } }}
                />
                <View style={{flex:1}} ></View>
                <OrgLogin/>
                <View style={{flex:1}} ></View>
                    <Button
                        raised
                        icon={{name: 'send'}}
                        title='BUTTON WITH ICON'
                        backgroundColor='#0044A9'
                    />
                </View>
        )
    }
}