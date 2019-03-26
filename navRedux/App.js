import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './AppNavigator';

import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <AppNavigator />
      </Provider>
    );
  }
}
