import axios from "axios";

const addtofavmainaction = (token, id) => {
  return (dispatch) => {
    axios
      .post(
        `songs/${id}/like`,
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then(() => dispatch(addedtofav()))
      .catch(() => dispatch(erroraddtofav()));
  };
};

const addedtofav = () => ({
  type: "ADDEDTOFAVSONGS",
});

const erroraddtofav = () => ({
  type: "ERRORADDTOFAVSONGS",
});

const removefromfav = (token, id) => {
  return (dispatch) => {
    axios
      .delete(`songs/${id}/like`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(() => dispatch(successremovefav()))
      .catch(() => dispatch(errorremovefromfav()));
  };
};

const successremovefav = () => ({
  type: "REMOVEFROMFAVSONGS",
});

const errorremovefromfav = () => ({
  type: "ERRORREMOVEFROMFAVSONGS",
});

const clearstate=()=>({
  type:'CLEARSTATE'
})

export default { addtofavmainaction, removefromfav,clearstate };
