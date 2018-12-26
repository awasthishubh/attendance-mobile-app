import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation'
import LoginScreen from './components/login'
import Home from './components/header'
import React from 'react'


export default createAppContainer(createMaterialTopTabNavigator({
    Home: Home,
    Login: LoginScreen
},{
    shifting:true,
    tabBarOptions:{
        style:{
            backgroundColor:'#0044A9'
        }
    }
    
}))