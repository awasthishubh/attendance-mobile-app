// export default ()=>{

// }
import io from 'socket.io-client';
const socket = io('https://attendance-socket.herokuapp.com');

export function onEvent (){
    return (dispatch)=>{
        console.log(dispatch)
        socket.on('newMem',function(data){
            console.log(data.reg+' joined')
        })
        
        socket.on('connectionErr', function(data){
            console.log(data)
        })
        
        socket.on('connectionSucess', function(data){
            console.log(data)
        })
        
        socket.on('userDis', function(data){
            console.log(data)
        })
        
        socket.on('attDone',function(){
            console.log(data)
        })
        
        socket.on('allMem',(data)=>{
            console.log(data)
        })
        
        socket.on('status',(data)=>{
            console.log(data)
            
        })
        
        socket.on('lobbyClosed',()=>{
            console.log('lobby Closed by admin')
            socket.disconnect()
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
    }
}