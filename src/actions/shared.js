import { getInitialData } from "../utils/api";
import { notifyComplete as notifyCompleteU, receiveUsers } from "./users";
import { notifyComplete as notifyCompleteQ,receiveQuestions } from "./questions";

import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(notifyCompleteU(false));
    dispatch(notifyCompleteQ(false));
    return getInitialData().then(({ users,questions }) => {
      console.log("users object ...");
     console.log(users);
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(notifyCompleteU(true));
      dispatch(notifyCompleteQ(true));
     // dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
