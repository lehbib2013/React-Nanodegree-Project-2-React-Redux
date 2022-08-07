import { combineReducers } from "redux";
import authentification from "./authentification";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  users,
  questions,
  authentification,
  loadingBar: loadingBarReducer,
});
