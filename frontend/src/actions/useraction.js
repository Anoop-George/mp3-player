const login=(token)=>{
    return{
        type:'LOGIN',
        payload:token
    }
}

export default login