import { combineReducers } from "redux";
import counterReducer from "./counter";
import fetchReducer from "./fetchApi";
import userReducer from "./user";

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  fetchApi: fetchReducer,
  // user : userReducer,
});

export default allReducers;
