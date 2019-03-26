import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { incr } from '../actions/counterActions';
import { decr } from '../actions/counterActions';

class counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.counterState.counter}</Text>
        <Button
          onPress={this.props.increment}
          title="_increment"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.props.decrement}
          title="_decrement"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
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

// Mapping state to props allows the UI to update when state in store changes
const mapStateToProps = state => {
  return {
    counterState: state.counter
  }
};


// Mapping local functions to the reducer functions
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incr())
    },
    decrement: () => {
      dispatch(decr())
    }
  }
};

// Connect counter to store
export default connect(mapStateToProps, mapDispatchToProps)(counter);
