import axios from 'axios';

const getsongs=()=>{
return dispatch=>{
    dispatch(loading());
    
    axios.get('songs/').then(res=>dispatch(fetcheddata(res.data)))
    .catch(err=>dispatch(errorfetch()))
}
}

const loading=()=>({
    type:'LOADING'

});

const fetcheddata=(data)=>({
    type:'FETCHEDDATA',
    payload:data
});

const errorfetch=()=>({
    type:'FETCHERROR'
});

export default getsongs
