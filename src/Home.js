import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import {saveTask, getAllTasks} from './helpers/AsyncStorage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: [],
    };

    this.initializeTaskList = this.initializeTaskList.bind(this);
    this.onTaskTyped = this.onTaskTyped.bind(this);
    this.onTaskAdded = this.onTaskAdded.bind(this);
    this.onTaskClicked = this.onTaskClicked.bind(this);
    this.onTaskDeleted = this.onTaskDeleted.bind(this);
    this.onTaskCleared = this.onTaskCleared.bind(this);
  }

  componentDidMount() {
    this.initializeTaskList();
  }

  initializeTaskList = async () => {
    try {
      const allItems = await getAllTasks('ToDos');
      this.setState({
        tasks: allItems || [],
      });
    } catch (err) {
      console.error(err);
    }
  };

  onTaskTyped = task => {
    this.setState({inputValue: task});
  };

  onTaskAdded = task => {
    // eslint-disable-next-line curly
    if (task.length === 0) return;

    const newTask = {
      text: task,
      date: Date.now(),
      isComplete: false,
    };

    this.setState(
      prevState => ({
        inputValue: '',
        tasks: [...prevState.tasks, newTask],
      }),
      () => saveTask(this.state.tasks),
    );
  };

  onTaskClicked = clickedTask => {
    const updatedTasks = this.state.tasks;

    updatedTasks.forEach(task => {
      if (task.date === clickedTask.date) {
        task.isComplete = !task.isComplete;
      }
    });

    this.setState({tasks: updatedTasks}, () => saveTask(this.state.tasks));
  };

  onTaskDeleted = deletedTask => {
    const filteredTasks = this.state.tasks.filter(
      task => task.date !== deletedTask.date,
    );

    this.setState({tasks: filteredTasks}, () => saveTask(this.state.tasks));
  };

  onTaskCleared = () => {
    this.setState({inputValue: ''});
  };

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>All Tasks</Text>
        </View>

        <View style={[styles.toDoContainer]}>
          <TaskInput
            value={this.state.inputValue}
            onTaskTyped={this.onTaskTyped}
            onTaskAdded={this.onTaskAdded}
            onTaskCleared={this.onTaskCleared}
          />

          <TaskList
            tasks={this.state.tasks}
            onTaskClicked={this.onTaskClicked}
            onTaskDeleted={this.onTaskDeleted}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(193, 226, 246)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(164, 23, 52)',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 30,
    height: '20%',
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  toDoContainer: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
});
