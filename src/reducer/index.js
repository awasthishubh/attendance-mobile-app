import {combineReducers} from 'redux'
import {orgState} from './organisation'
import {memState} from './member'

export function viewState(state={screen:null, loading:false}, action){
    console.log(action,state)
    switch(action.type){
        case 'CHANGE_SCREEN':
            return {...state, screen:action.payload}
        case 'CHANGE_LOADING':
            return {...state, loading:action.payload}
        default:
            return state
    }
}

console.log(orgState);
console.log(memState);

export default combineReducers({
    viewState,orgState,memState
})