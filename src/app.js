import React from 'react'
import MemDash from './components/MemDash'
import Login from './components/login'
import OrgDash from './components/OrgDash'
import {onEvent,disconnect} from './action/socket'
import {connect} from 'react-redux'
import {Root} from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';
import {AppState} from 'react-native'

class app extends React.Component{ 
    constructor(props){
        super(props)
        this.props.onEvent()
    }
    componentDidMount() {
        AppState.addEventListener('change', (nextState)=>{
            if(nextState!=='active'){
                this.props.disconnect()
                alert('Disconnected as user switched app')
            }
        });
    }   
    renderDash(){
        console.log(7878,this.props)
        console.log(this.props)
        if(this.props.viewState.screen==='MEM')
            return <MemDash/>
        else if(this.props.viewState.screen==='ORG')
            return <OrgDash/>
        else
            return <Login/>
    }
    render(){
        return(
            <Root>
                <Spinner
                    visible={Boolean(this.props.viewState.loading)}
                    textContent={String(this.props.viewState.loading)}
                    textStyle={{color: '#FFF'}}
                    size='large'
                    />
                {this.renderDash()}
            </Root>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,{disconnect,onEvent})(app)
