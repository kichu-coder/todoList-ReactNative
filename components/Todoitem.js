import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Todoitem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

export default Todoitem;
