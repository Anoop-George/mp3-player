const initialState = {
  loading: false,
  songs: [],
  error: false,
};

const songs = (state=initialState, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true, error: false };
    }
    case "FETCHEDDATA":
      return { loading: false, songs: [action.payload], error: false };
    case "FETCHERROR":
      return { loading: false, songs: [...state.songs], error: true };
    default:
      return state;
  }
};

export default songs;
