export function members (){
    return [{name:'asd',dist:12},{name:'dfvd',dist:42},{name:'dvdb',dist:34},{name:'bng',dist:12}]
}

export function viewState(state=null, action){
    switch(action.type){
        case 'CHANGE_MEM_VIEW':
            return action.payload
    }
}