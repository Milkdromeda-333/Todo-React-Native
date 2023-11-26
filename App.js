import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import TodoListContainer from './TodoListContainer';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Hello, User!</Text>
        <Text>What are you DOIN today?</Text>
        <TodoListContainer />
      </View>
      <StatusBar translucent={false} backgroundColor="#fff" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  header: {
    fontSize: 20,
  }
});

