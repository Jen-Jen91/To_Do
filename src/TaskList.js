import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Trash from './icons/trash-2-outline.svg';
import Award from './icons/award-outline.svg';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask = task => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.props.onTaskDeleted(task)},
      ],
      {cancelable: false},
    );
  };

  render() {
    return this.props.tasks.length ? (
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
              onPress={() => this.deleteTask(item)}>
              <Trash width={30} height={30} fill={'rgb(164, 23, 52)'} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.date.toString()}
      />
    ) : (
      <View style={[styles.noTasksContainer]}>
        <Text style={[styles.noTasks]}>You have no tasks!</Text>
        <Award width={30} height={30} fill={'rgb(164, 23, 52)'} />
      </View>
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
  noTasksContainer: {
    alignItems: 'center',
  },
  noTasks: {
    color: 'rgb(33, 42, 127)',
    fontSize: 20,
    marginBottom: 10,
  },
});
