import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: [],
    };
  }

  onTaskTyped = task => {
    console.log('TASK: ', task);
    this.setState({inputValue: task});
  };

  onTaskAdded = task => {
    console.log('TASK: ', task);
    // eslint-disable-next-line curly
    if (task.length === 0) return;
    this.setState(prevState => ({
      inputValue: '',
      tasks: [...prevState.tasks, task],
    }));
  };

  render() {
    return (
      <View>
        <Text>HOME</Text>

        <TextInput
          value={this.state.inputValue}
          placeholder="Type a task..."
          onChangeText={this.onTaskTyped}
          onSubmitEditing={event => this.onTaskAdded(event.nativeEvent.text)}
          c
        />

        {this.state.tasks.map((task, id) => {
          return <Text key={id}>{task}</Text>;
        })}
      </View>
    );
  }
}

export default Home;
