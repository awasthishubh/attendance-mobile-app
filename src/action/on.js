export default ()=>{
    return (dispatch)=>{
        console.log(dispatch)
        setTimeout(()=>{
            console.log(111,dispatch)
        },5000)
    }
}