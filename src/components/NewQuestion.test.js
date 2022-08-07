import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider as ReduxProvider ,useDispatch} from 'react-redux';
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { login,logout } from "../actions/authentification";
import {BrowserRouter as Router} from 'react-router-dom';
import  NewQuestions  from './NewQuestion';

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
  it('will display an error if neither of options was clicked', () => {
    //const dispatch = useDispatch();
      store.dispatch(login({username:'lehbib', password:'fff'}));
      const component = reduxRender(<Router><NewQuestions /></Router>);
      
      const contentInputa = component.getByTestId('optiona-input');
      fireEvent.change(contentInputa, { target: { value: 'I prefer option A ?' } });
      const contentInputb = component.getByTestId('optionb-input');
      fireEvent.change(contentInputb, { target: { value: 'I prefer option A ?' } });
      const submitButton = component.getByTestId('submit-button');
      fireEvent.click(submitButton);
 
      expect(component.getByTestId('submit-button')).toBeInTheDocument();
      expect(component.queryByTestId('error-happened')).not.toBeInTheDocument();
    
  });

});