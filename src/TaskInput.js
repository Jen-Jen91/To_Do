import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TaskInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        value={this.props.value}
        placeholder="Type a task..."
        onChangeText={this.props.onTaskTyped}
        onSubmitEditing={event =>
          this.props.onTaskAdded(event.nativeEvent.text)
        }
      />
    );
  }
}

export default TaskInput;
