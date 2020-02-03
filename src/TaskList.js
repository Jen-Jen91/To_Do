import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Trash from './icons/trash-2-outline.svg';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({item}) => (
          <View style={[styles.taskContainer]}>
            <TouchableOpacity
              style={[styles.taskButton]}
              onPress={() => this.props.onTaskClicked(item)}>
              <Text
                style={[
                  item.isComplete
                    ? styles.taskComplete
                    : styles.taskNotComplete,
                ]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.deleteButton]}
              onPress={() => this.props.onTaskDeleted(item)}>
              <Trash width={30} height={30} fill={'rgb(164, 23, 52)'} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.date.toString()}
      />
    );
  }
}

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    elevation: 3,
  },
  taskButton: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  deleteButton: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  taskComplete: {
    color: 'rgb(195, 198, 221)',
    textDecorationLine: 'line-through',
  },
  taskNotComplete: {
    color: 'rgb(33, 42, 127)',
  },
});
