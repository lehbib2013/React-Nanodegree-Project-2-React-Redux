import * as React from 'react';
import { createStore } from "redux";
import reducer from "../../reducers";
import middleware from "../../middleware";
import { login,logout } from "../../actions/authentification";
import { Provider as ReduxProvider } from 'react-redux';
const store = createStore(reducer, middleware);

describe('Authentification test for authentification reducer', () => {
  it('will match the name of user in reducer authentification', async () => {
    let username = "mtsamis";
    let password = "fff";
      store.dispatch(logout());
      store.dispatch(login(username, password));
      let {authedUser,} = store.getState().authentification;
      console.log("kkkk");
      console.log(authedUser);
      expect(authedUser).toEqual('mtsamis');
  });
  it('will assert the value of authedUser in authentification state  is null after calling logout ', async () => {
      store.dispatch(logout());
      let {authedUser,} = store.getState().authentification;
      console.log("kkkk");
      console.log(authedUser);
     
      expect(authedUser).toEqual(null);
      
    
  });
});