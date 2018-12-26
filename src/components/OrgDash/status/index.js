import React from 'react'
import {Container, View,Content} from 'native-base'
import StatDet from './detail'
import ThrsDestance from './dist'

export default class app extends React.Component{
    render(){
        return(
        <Container>
        <Content style={{paddingTop:30,paddingRight:30,paddingLeft:30}}>
          <StatDet/>
          <ThrsDestance/>
          <View style={{height:50}}/>
        </Content>
      </Container>
        )
    }
}