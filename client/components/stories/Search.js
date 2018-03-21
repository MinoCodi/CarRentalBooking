import React from "react";
import { storiesOf } from "@storybook/react";

import { Provider } from 'react-redux';

import { Search }  from "../search";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { searchPageReducer } from "../search";

import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory, Router } from 'react-router';

import promiseMiddleware from 'redux-promise';


import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routerReducer: routerReducer,
  searchPage: searchPageReducer

});

const store = createStore( rootReducer,
  applyMiddleware(promiseMiddleware) );

const history = syncHistoryWithStore(browserHistory, store);


storiesOf("Search", module)
.addDecorator((Search) => (<Provider store={store}>
  <Router history={history}> {Search()} </Router>

                        </Provider>))
.add("Search", () => <Search />);
