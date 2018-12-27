import io from 'socket.io-client';
const socket = io('https://attendance-socket.herokuapp.com');

export function on (){
    return (dispatch)=>{
        console.log(dispatch)
        socket.on('newMem',function(data){
            console.log(data.reg+' joined')
        })
        
        socket.on('connectionErr', function(data){
            console.log(data)
        })
        s
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

export function admin(org, passwd, threshold,){
    navigator.geolocation.getCurrentPosition(function(pos){
        socket.emit('adminConnect',{
            org, passwd, threshold, pos:{lat,lng}
        })
    })
}

export function mem(org,reg,lat,lng){
    navigator.geolocation.getCurrentPosition(function(pos){
        socket.emit('memConnect',{
            org, reg, pos:{ lat, lng}
        })
    })
}

export function doAttendance(){
    socket.emit('markPresent')
}

export function getMembers(){
    socket.emit('allMem')
}

export function disconnect(){
    socket.disconnect();
    console.log('disconnected')
}

export function updatePos(lat,lng){
    socket.emit('updatePos',{lat,lng})
}

export function updateThreshold(threshold){
    socket.emit('updateThreshold',threshold)
}