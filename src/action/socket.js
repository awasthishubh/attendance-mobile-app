// export default ()=>{

// }
import io from 'socket.io-client';
import {Toast} from 'native-base'
const socket = io('https://attendance-socket.herokuapp.com');

export function onEvent (){
    return (dispatch)=>{
        console.log(dispatch)
        socket.on('newMem',function(data){
            // console.log(data.reg+' joined')
            // Toast.show({
            //     text: data.reg+' joined',
            //     buttonText: 'Okay'
            //   })
        })
        
        socket.on('connectionErr', function(data){
            console.log(data)
            alert(data)
            dispatch({
                type:'CHANGE_SCREEN', payload:null
            })
        })
        
        socket.on('lobbyCreateSucess', function(data){
            console.log(data)
            dispatch({
                type:'CHANGE_SCREEN', payload:'ORG'
            })
        })

        socket.on('lobbyJoinSucess', function(data){
            console.log(data)
            dispatch({
                type:'CHANGE_SCREEN', payload:'MEM'
            })
        })
        
        socket.on('userDis', function(data){
            console.log(data)
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
            socket.disconnect()
            dispatch({
                type:'CHANGE_SCREEN', payload:null
            })
        })
        
        socket.on('err',(err)=>{
            console.log(err)
        })

        
    }
}

export function createLobby(org, threshold,lat,lng){
    return (dispatch)=>{
        navigator.geolocation.getCurrentPosition(function(pos){
            socket.emit('adminConnect',{
                org, passwd:'acm@vit123', threshold, 
                pos:{
                    lat:pos.coords.latitude,
                    lng:pos.coords.longitude
                }
            }, function(err){
                alert(err.message)
            },{
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000
            })
        })
    }
}

export function joinLobby(org,reg){
    return (dispatch)=>{
            navigator.geolocation.getCurrentPosition(function(pos){
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
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 10000
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
        socket.disconnect();
        console.log('disconnected')
        dispatch({
            type:'CHANGE_SCREEN', payload:null
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