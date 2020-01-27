import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({item}) => <Text>{item.text}</Text>}
        keyExtractor={item => item.date.toString()}
      />
    );
  }
}

export default TaskList;
