import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

class TaskInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        value={this.props.value}
        placeholder="Type a task..."
        placeholderTextColor="rgb(193, 226, 246)"
        onChangeText={this.props.onTaskTyped}
        onSubmitEditing={event =>
          this.props.onTaskAdded(event.nativeEvent.text)
        }
        style={[styles.input]}
      />
    );
  }
}

export default TaskInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'rgb(50, 92, 118)',
    borderRadius: 25,
    borderWidth: 2,
    color: 'rgb(50, 92, 118)',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
