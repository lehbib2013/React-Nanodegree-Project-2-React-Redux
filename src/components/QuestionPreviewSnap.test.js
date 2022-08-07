import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider as ReduxProvider ,useDispatch} from 'react-redux';
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { login,logout } from "../actions/authentification";
import {BrowserRouter as Router} from 'react-router-dom';
import QuestionWidget from './QuestionWidget';

const store = createStore(reducer, middleware);

/** To be used whenever Redux is referenced */
const ReduxWrapper = ({ children }) => (
  <ReduxProvider store={store}>
    {children}
  </ReduxProvider>
)
/**Render used for Redux */
const reduxRender = (ui, options) =>
  render(ui, { wrapper: ReduxWrapper, ...options })

describe('test NewQuestions functionality', () => {
  it('will display question in widget', () => {
  
      store.dispatch(login({username:'lehbib', password:'fff'}));
      const currQuestion = { "8xf0y6ziyjabvozdd253nd": {
                              id: '8xf0y6ziyjabvozdd253nd',
                              author: 'sarahedo',
                              timestamp: 1467166872634,
                              optionOne: {
                                votes: ['sarahedo'],
                                text: 'Build our new application with Javascript',
                              },
                              optionTwo: {
                                votes: [],
                                text: 'Build our new application with Typescript'
                              }
                            } };
      const componentPrevQuestionPassingQuestion = reduxRender(<Router><QuestionWidget question={currQuestion} /></Router>);
      const componentPrevQuestionWithoutPssQuestion = reduxRender(<Router><QuestionWidget /></Router>);
      expect(componentPrevQuestionPassingQuestion).toMatchSnapshot();
  
  });
  it('will display a string because no question was passed', () => {
  
    store.dispatch(login({username:'lehbib', password:'fff'}));
     const componentPrevQuestionWithoutPssQuestion = reduxRender(<Router><QuestionWidget /></Router>);
     expect(componentPrevQuestionWithoutPssQuestion).toMatchSnapshot();

});

});