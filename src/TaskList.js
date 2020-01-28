import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DATA: ', this.props.tasks);

    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({item}) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{color: item.isComplete ? 'green' : 'red'}}
              onPress={() => this.props.onTaskClicked(item)}>
              {item.text}
            </Text>
            <Text onPress={() => this.props.onTaskDeleted(item)}>DELETE</Text>
          </View>
        )}
        keyExtractor={item => item.date.toString()}
      />
    );
  }
}

export default TaskList;
