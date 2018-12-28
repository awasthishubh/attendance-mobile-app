
import io from 'socket.io-client';
import {Toast} from 'native-base'
var socket = io('https://attendance-socket.herokuapp.com');

export function onEvent (){
    return (dispatch)=>{
        console.log(dispatch)
        socket.on('newMem',function(data){
            console.log(data.reg+' joined')
            Toast.show({
                text: data.reg+' joined',
                buttonText: 'Okay'
              })
        })
        
        socket.on('connectionErr', function(data){
            console.log(data)
            alert(data)
            dispatch({
                type:'CHANGE_SCREEN', payload:null
            })
            dispatch({
                type:'CHANGE_LOADING', payload:false
            })
        })
        
        socket.on('lobbyCreateSucess', function(data){
            socket.emit('status')
        })

        socket.on('lobbyJoinSucess', function(data){
            socket.emit('status')
        })
        
        socket.on('userDis', function(data){
            console.log(data)
            Toast.show({
                text: data.reg+' left',
                buttonText: 'Okay'
              })
        })
        
        socket.on('attDone',function(){
            console.log(data)
        })
        
        socket.on('allMem',(data)=>{
            console.log(data)
            inRange=[]
            outOfRange=[]
            for(mem in data){
                console.log()
                if(data[mem].inRange) inRange.push(data[mem])
                else outOfRange.push(data[mem])
            }
            console.log({inRange,outOfRange})
            dispatch({
                type:'ALL_MEMBERS', payload:{inRange,outOfRange}
            })
        })
        
        socket.on('status',(data)=>{
            console.log(data)
            if(data.connected){
                if(data.type==='Admin'){
                    dispatch({
                        type:'CHANGE_SCREEN', payload:'ORG'
                    })
                    dispatch({
                        type:'ORG_STATUS', payload:{
                            connected:data.connected,
                            organisation:data.details.org,
                            threshold:data.dist,
                            type:data.type,
                            lat:data.details.pos.lat,
                            lng:data.details.pos.lng
                        }
                    })
                    dispatch({
                        type:'CHANGE_LOADING', payload:false
                    })
                    
                }
                else if(data.type==='Member'){
                    dispatch({
                        type:'CHANGE_SCREEN', payload:'MEM'
                    })
                    dispatch({
                        type:'CHANGE_LOADING', payload:false
                    })
                    dispatch({
                        type:'ORG_STATUS', payload:{
                            connected:data.connected,
                            organisation:data.details.org,
                            distance:data.dist,
                            type:data.type,
                            lat:data.details.pos.lat,
                            lng:data.details.pos.lng,
                            inRange:data.inRange,
                            id:data.details.id
                        }
                    })
                }
            } else{
                dispatch({
                    type:'CHANGE_SCREEN', payload:null
                })
                dispatch({
                    type:'CHANGE_LOADING', payload:false
                })
            }
        })
        
        socket.on('lobbyClosed',()=>{
            console.log('lobby Closed by admin')
            socket.emit('disconnectMe')
            dispatch({
                type:'CHANGE_SCREEN', payload:null
            })
        })
        
        socket.on('err',(err)=>{
            console.log(err)
        })

        socket.on('disconnect', function(){
            console.log(socket)
            console.log(socket.socket)
            console.log(socket.connect)
            console.log(socket.reconnect)
            socket = io('https://attendance-socket.herokuapp.com',{'forceNew':true });
            onEvent()
            dispatch({
                type:'CHANGE_SCREEN', payload:null
            })
            dispatch({
                type:'INITIAL_ORG_STATE', payload:null
            })
        })        
    }
}

export function createLobby(org, threshold,lat,lng){
    return (dispatch)=>{
        dispatch({
            type:'CHANGE_LOADING', payload:'Fetching location...'
        })
        navigator.geolocation.getCurrentPosition(function(pos){
            dispatch({
                type:'CHANGE_LOADING', payload:'Creating lobby...'
            })
            socket.emit('adminConnect',{
                org, threshold, 
                pos:{
                    lat:pos.coords.latitude,
                    lng:pos.coords.longitude
                }
            })
        }, function(err){
            alert(err.message)
        },{
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 5000
        })
    }
}

export function joinLobby(org,reg){
    return (dispatch)=>{
        dispatch({
            type:'CHANGE_LOADING', payload:'Fetching location...'
        })
        navigator.geolocation.getCurrentPosition(function(pos){
            dispatch({
                type:'CHANGE_LOADING', payload:'Joining lobby...'
            })
            socket.emit('memConnect',{
                org, reg, 
                pos:{
                    lat:pos.coords.latitude,
                    lng:pos.coords.longitude
                }
            })
        }, function(err){
            alert(err.message)
        },{
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 5000
        })
    }
}

export function getStatus(){
    return (dispatch)=>{
        socket.emit('status')
    }
}

export function doAttendance(){
    return (dispatch)=>{
        socket.emit('markPresent')
    }
}

export function getMembers(){
    return (dispatch)=>{
        socket.emit('allMem')
    }
}

export function disconnect(){
    return (dispatch)=>{
        socket.emit('disconnectMe')
        console.log('disconnected')
        dispatch({
            type:'CHANGE_SCREEN', payload:null
        })
        dispatch({
            type:'INITIAL_ORG_STATE', payload:null
        })
    }
}

export function updatePos(lat,lng){
    return (dispatch)=>{
        socket.emit('updatePos',{lat,lng})
    }
}

export function updateThreshold(threshold){
    return (dispatch)=>{
        socket.emit('updateThreshold',threshold)
        dispatch({
            type:'UPDATE_THRS', payload:threshold
        })
    }
}