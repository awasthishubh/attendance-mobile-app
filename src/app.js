import React from 'react'
import {Text, View, Lay/outAnimation,Dimensions,Animated} from 'react-native'
import {Button,Header,} from 'react-native-elements';
import Login from './components/login'

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Login/>
        )
    }
}