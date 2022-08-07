import { saveQuestion,saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {formatQuestion} from '../utils/_DATA';
import { receiveUsers } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";
export const QUESTIONS_COMPLETED= "QUESTIONS_COMPLETED";
export const GET_QUESTION= "GET_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
function getQuestion(idQuestion) {
  return {
    type: ADD_QUESTION,
    idQuestion,
  };
}
export function handleAddQuestion(obj) {
  //console.log(obj);
  return (dispatch, getState) => {
    const { username } = getState().authentification.authedUser;
    const {optionOneText,optionTwoText} = obj;
    const author= username;
    console.log("obj of question username...");
    console.log({ optionOneText, optionTwoText, author });
    dispatch(showLoading());
    return saveQuestion({ optionOneText, optionTwoText, author })
         .then((questions)=> {dispatch(receiveQuestions(questions));})
          .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function notifyComplete(info) {
  return {
    type: QUESTIONS_COMPLETED,
    info,
  };
}
export function saveAnswer({authedUser, qid, answer} ) {
  return {
    type: SAVE_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleSaveAnswer(info) {
  console.log("info");
  console.log(info);
  
  return (dispatch) => {
       dispatch(showLoading());
       
      return saveQuestionAnswer(info)
      .then(({users,questions})=> {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));})
   //   .then(()=>dispatch(saveAnswer(info)))

      .then(() => dispatch(hideLoading()));
  };
}
