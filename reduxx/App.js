import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CounterApp from './CounterApp'

import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      // Any component used on CounterApp can have access to store
      <Provider store = { store }>
        <CounterApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
