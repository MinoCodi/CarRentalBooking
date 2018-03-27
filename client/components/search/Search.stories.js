import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from 'react-redux';
import { Search }  from "../search";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchPageReducer } from "../search";
import { browserHistory, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter } from "react-router-dom";
import promiseMiddleware from 'redux-promise';
import { routerReducer } from 'react-router-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const rootReducer = combineReducers({
  searchPage: searchPageReducer,
  routing: routerReducer
});

const store = createStore( rootReducer,
  applyMiddleware(promiseMiddleware));

const history = createBrowserHistory();
// const history2 = syncHistoryWithStore(history, store);

storiesOf("Search", module)
.addDecorator((Search) => (
  <Provider store={store}>
  <Router history={history} >
    {Search()}
  </Router>
  </Provider>))
.add("Search", () => <Search />);
