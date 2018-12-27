import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import MemDash from './components/MemDash'
import Login from './components/login'
import OrgDash from './components/OrgDash'

import reducers from './reducer'

export default ()=>{
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
            <OrgDash/>
        </Provider>
        )
}