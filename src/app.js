import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import MemDash from './components/MemDash'
import Login from './components/login'
import OrgDash from './components/OrgDash'

import reducers from './reducer'

export default ()=>{
    return (
        <Provider store={createStore(reducers)}>
            <OrgDash/>
        </Provider>
        )
}