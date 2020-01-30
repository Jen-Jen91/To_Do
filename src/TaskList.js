import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

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
              <Text>DELETE</Text>
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
    height: 50,
    maxHeight: 50,
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskButton: {
    backgroundColor: 'orange',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: 'purple',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  taskComplete: {
    color: 'rgb(193, 226, 246)',
    textDecorationLine: 'line-through',
  },
  taskNotComplete: {
    color: 'rgb(50, 92, 118)',
  },
});
