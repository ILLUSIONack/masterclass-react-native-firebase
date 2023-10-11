import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, FlatList, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { FIREBASE_DB } from './firebaseConfig'
import {addDoc, collection, doc, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react';

type Task = {
  title: string;
  key: string;
}
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]); 
  const [text, onChangeText] = React.useState('Useless Text');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, "todos"));
        const todos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          title: doc.data().title,
          key: doc.id,
        }));
        setTasks(todos);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchTodos();
  }, [tasks]);

  const addTodo = async () => {
    // TODO: - Opdracht 2 - Implementing adding todo document to todo's collections. Pass the title as text
    // Use addDoc, collection
    // Test this checking firebase to see if the todo is pushed

    // console.log("Created Todo with id", doc.id)
  }

  return (
      <SafeAreaView>
        // TODO: - Opdracht 3 - Implement scrolling for entire view
        <View style={styles.container}>
          <Text>TODO Application</Text>
          <StatusBar style="auto" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Button onPress={addTodo} title="Add TODO"/>
          {/* <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Name: {item.title}</Text>
            </View>
          )}
        /> */}
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
