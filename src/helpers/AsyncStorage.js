import AsyncStorage from '@react-native-community/async-storage';

export async function saveTask(value) {
  try {
    await AsyncStorage.setItem('ToDos', JSON.stringify(value));
  } catch (e) {
    console.error('Error saving task');
  }

  console.log('Finished saving task');
}

// REMOVE TASK USING HOME SCREEN STATE - FILTER STATE ARRAY (REMOVE ONE ITEM FROM THAT ARRAY) - THEN SET "ToDos" IN ASYNCSTORAGE (OVERWRITES PREVIOUS STORAGE BUT NOW WITH ONE LESS TASK) - THE SAME CAN BE DONE FOR UPDATING isCompleted

// export async function removeTask(key) {
//   try {
//     await AsyncStorage.removeItem(JSON.stringify(key));
//   } catch (e) {
//     console.error('Error removing task');
//   }

//   console.log('Finished removing task');
// }

export async function getAllTasks() {
  let allTasks = null;
  try {
    allTasks = await AsyncStorage.getItem('ToDos');
  } catch (e) {
    console.error('Error getting task');
  }

  console.log('DONE: ', allTasks);
  return JSON.parse(allTasks);
}
