import counterReducer from "./counter";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  counter: counterReducer,
});

export default Reducers;
