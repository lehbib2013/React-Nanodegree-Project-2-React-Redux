import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswerU,
    _saveQuestionAnswerQ,
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
      _getUsers(),
    ]).then(([questions, users]) => {
      console.log("usersss...");
       console.log(users);
      return {
      questions,
      users,
    }})}
  

  export function getQuestionsData () {
    return Promise.all([
      _getQuestions
    ]).then(([questions]) => ({
      questions
    }))
  }
  export function getUsersData () {
    return Promise.all([
      _getUsers,
    ]).then(([users]) => ({
      users,
    }))
  }
  
  export function saveQuestion (question) {
    return _saveQuestion(question)
  }
  export function saveQuestionAnswer (answer) {
    return Promise.all([
      _saveQuestionAnswerU(answer),
      _saveQuestionAnswerQ(answer),
    ]).then(([users,questions]) => ({
      users,questions
    }))
   
  }