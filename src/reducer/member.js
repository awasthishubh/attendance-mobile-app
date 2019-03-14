initMemStatus={
    connected:null,
    organisation:'',
    distance:null,
    type:'',
    lat:null,
    lng:null,
    inRange:null,
    id:null
}

export function memState(state=initMemStatus, action){
    switch(action.type){
        case 'ORG_STATUS':
            return {...state, ...action.payload}
        case 'UPDATE_MEM_POS':
            return {...state}
        case 'INITIAL_MEM_STATE':
            return initMemStatus
        default:
            return state
    }
}