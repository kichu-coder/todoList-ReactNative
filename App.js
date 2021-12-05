import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import Todoitem from "./components/Todoitem";

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Up-sized bottom-line portal",
    },
    {
      id: 2,
      text: "Integrated mission-critical solution",
    },
    {
      id: 3,
      text: "Visionary cohesive instruction set",
    },
  ]);

  const pressHandler = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    const todoItem = { id: todo.length + 1, text };
    setTodo((prevTodo) => [...prevTodo, todoItem]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={todo}
            renderItem={({ item }) => (
              <Todoitem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
