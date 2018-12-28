
initStatus={
    status: {
        connected:null,
        organisation:'',
        type:'',
        lat:null,
        lng:null,
        threshold:0
    },
    members:[]
}

export function orgState(state=initStatus, action){
    switch(action.type){
        case 'ORG_STATUS':
            return {...state, status:action.payload}
        case 'UPDATE_THRS':
            return {...state, status:{...state.status, threshold:action.payload}}
        default:
            return state
    }
}