

const playersong=(state={song:'',value:1},action)=>{
    switch(action.type){
        case 'SONGTOPLAYER':return {song:action.payload,value:state.value+1}
        default: return state
    }
}

export default playersong