import React from 'react'
import MemDash from './components/MemDash'
import Login from './components/login'
import OrgDash from './components/OrgDash'
import {onEvent} from './action/socket'
import {connect} from 'react-redux'


navigator.geolocation.getCurrentPosition(function(pos){
    console.log(pos)
}, function(err){
    alert(err.message)
},{
    enableHighAccuracy: false,
    timeout: 12000,
    maximumAge: 10000
})

class app extends React.Component{ 
    constructor(props){
        super(props)
        this.props.onEvent()
    }
    render(){
        console.log(this.props)
        if(this.props.viewState.screen==='MEM')
            return <MemDash/>
        else if(this.props.viewState.screen==='ORG')
            return <OrgDash/>
        else
            return <Login/>
    }
}

function mapStateToProps(state){
    return({
        viewState:state.viewState
    })
}

export default connect(mapStateToProps,{onEvent})(app)
