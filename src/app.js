import React from 'react'
import {Text, View} from 'react-native'
import {Button,Header} from 'react-native-elements';
import OrgLogin from './components/OrgLogin'
import MemLogin from './components/MemLogin'


export default class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    outerContainerStyles={{shadowOffset: { width: 0, height: 0 },  
                        shadowColor: 'black',  
                        shadowOpacity: 1,  
                        elevation: 3,  
                        zIndex:999,
                    }}
                    innerContainerStyles={{shadowOffset: { width: 10, height: 10 },  
                        shadowColor: 'black',  
                        shadowOpacity: 1,  
                        elevation: 3,  
                        zIndex:999}}
                    backgroundColor='#0044A9'
                    centerComponent={{ text: 'Attendance App', style: { color: '#fff', fontSize:25 } }}
                />
                <View style={{flex:1}} ></View>
                <MemLogin/>
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