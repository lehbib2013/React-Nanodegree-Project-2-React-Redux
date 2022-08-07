import { LOG_IN,LOG_OUT } from "../actions/authentification";

export default function authentification(state = {"authedUser":null,}, action) {
  switch (action.type) {
    case LOG_IN:
      return {
              ...state,
              "authedUser": action.userInfo,
             };
    case LOG_OUT:
      return {
        ...state,
        "authedUser": null,
        };
    default:
      return state;
      
  }
}
