import { combineReducers } from "redux";
import songs from "./songsReducer";
import songtype from "./typereducer";
import user from "./useractions";
import favsongs from './favourites';
import playersong from './songtoplayerreducer';
import addremovefromfavourite from './favsongaddremoveaction'

const rootReducer = combineReducers({
  songs,
  songtype,
  user,
  favsongs,
  playersong,
  addremovefromfavourite
});

export default rootReducer;
