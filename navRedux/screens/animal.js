import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { toDog } from '../actions/animalActions';
import { toCat } from '../actions/animalActions';

class animal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.animalState.animal}</Text>
        <Button
          onPress={this.props.dog}
          title="Dog"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.props.cat}
          title="Cat"
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
    animalState: state.animal
  }
};


// Mapping local functions to the reducer functions
const mapDispatchToProps = dispatch => {
  return {
    dog: () => {
      dispatch(toDog())
    },
    cat: () => {
      dispatch(toCat())
    }
  }
};

// Connect animal to store
export default connect(mapStateToProps, mapDispatchToProps)(animal);
