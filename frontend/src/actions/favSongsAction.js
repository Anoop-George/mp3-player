import axios from "axios";

const getfavsongs = (token) => {
  
  return (dispatch) => {
    dispatch(loadingfav());

    axios
      .get("likedsongs/",{headers: {'Authorization': `Token ${token}`} })
      .then((res) => dispatch(gotfavsongs(res.data)))
      .catch(() => dispatch(errorfetchfav()));
  };
};

const loadingfav = () => ({
  type: "LOADINGFAV",
});

const gotfavsongs = (data) => ({
  type: "FETCHEDFAVSONGS",
  payload: data,
});

const errorfetchfav = () => ({
  type: "FETCHFAVERROR",
});

export default getfavsongs;
