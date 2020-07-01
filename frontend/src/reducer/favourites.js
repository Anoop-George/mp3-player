const initialState = {
    loading: false,
    songs: [],
    error: false,
    favourite:false
  };
  
  const favsongs = (state=initialState, action) => {
    switch (action.type) {
      case "LOADINGFAV": {
        return { ...state, loading: true, error: false };
      }
      case "FETCHEDFAVSONGS":
        return { loading: false, songs: [action.payload], error: false };
      case "FETCHFAVERROR":
        return { loading: false, songs: [...state.songs], error: true };
      default:
        return state;
    }
  };
  
  export default favsongs;
  