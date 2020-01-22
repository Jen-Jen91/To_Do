import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>To Do App</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
