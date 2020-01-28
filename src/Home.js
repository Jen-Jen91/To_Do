import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
    const newTask = {
      text: clickedTask.text,
      date: clickedTask.date,
      isComplete: !clickedTask.isComplete,
    };

    const filteredTasks = this.state.tasks.filter(
      task => task.date !== newTask.date,
    );

    filteredTasks.push(newTask);

    this.setState({tasks: filteredTasks}, () => saveTask(this.state.tasks));
  };

  onTaskDeleted = deletedTask => {
    const filteredTasks = this.state.tasks.filter(
      task => task.date !== deletedTask.date,
    );

    this.setState({tasks: filteredTasks}, () => saveTask(this.state.tasks));
  };

  render() {
    return (
      <View>
        <Text>HOME</Text>

        <TaskInput
          value={this.state.inputValue}
          onTaskTyped={this.onTaskTyped}
          onTaskAdded={this.onTaskAdded}
        />

        <TaskList
          tasks={this.state.tasks}
          onTaskClicked={this.onTaskClicked}
          onTaskDeleted={this.onTaskDeleted}
        />
      </View>
    );
  }
}

export default Home;
