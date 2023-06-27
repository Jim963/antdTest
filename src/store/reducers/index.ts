import { combineReducers } from "redux";
import alerts from "../slices/alert";

const reducers = combineReducers({
  alerts,
});

export default reducers;
