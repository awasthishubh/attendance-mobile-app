import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import App from './app'
import reducers from './reducer'

export default ()=>{
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
            <App/>
        </Provider>
        )
}