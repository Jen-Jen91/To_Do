import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Cross from './icons/close-circle-outline.svg';

class TaskInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.inputContainer]}>
        <TextInput
          value={this.props.value}
          placeholder="Type to add a new task..."
          placeholderTextColor="rgb(195, 198, 221)"
          onChangeText={this.props.onTaskTyped}
          onSubmitEditing={event =>
            this.props.onTaskAdded(event.nativeEvent.text)
          }
          style={[styles.input]}
        />
        <TouchableOpacity
          style={[styles.clearButton]}
          onPress={this.props.onTaskCleared}>
          <Cross width={25} height={25} fill={'rgb(164, 23, 52)'} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 25,
    borderColor: 'rgb(33, 42, 127)',
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    elevation: 3,
  },
  input: {
    width: '85%',
    borderBottomLeftRadius: 23,
    borderTopLeftRadius: 23,
    color: 'rgb(33, 42, 127)',
    paddingLeft: 20,
  },
  clearButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
  },
});
