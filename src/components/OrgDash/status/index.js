import React from 'react'
import {Container, View,Content} from 'native-base'
import StatDet from './detail'
import ThrsDestance from './dist'
import {connect} from 'react-redux'
import {updateThreshold} from '../../../action/socket'
class OrgDashStatus extends React.Component{
    constructor(props){
      super(props)
      console.log(222,this.props)
    }
    render(){
      console.log(222,this.props)
        return(
        <Container>
        <Content style={{paddingTop:30,paddingRight:30,paddingLeft:30}}>
          <StatDet 
            org={this.props.orgState.status.organisation}
            inRage={this.props.orgState.members.inRange.length}
            ouOfRange={this.props.orgState.members.outOfRange.length}
          />
          <ThrsDestance thrs={this.props.orgState.status.threshold} updateThrs={this.props.updateThreshold}/>
          <View style={{height:50}}/>
        </Content>
      </Container>
        )
    }
}

function mapStateToProps(state){
  return{
      orgState:state.orgState
  }
}

export default connect(mapStateToProps,{updateThreshold})(OrgDashStatus)