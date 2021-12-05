import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    height: 80,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;
