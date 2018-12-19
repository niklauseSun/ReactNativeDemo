/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";

import { Provider, connect } from "react-redux";

import AppNavigator from './src/routers'

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  nav: navReducer,
})

export const routerMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.router
);

const AppN = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppN);

const store = createStore(appReducer, applyMiddleware(routerMiddleware));

global.actionUtil = (type, payload) => store.dispatch({ type, payload }) //定义全局actions

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
