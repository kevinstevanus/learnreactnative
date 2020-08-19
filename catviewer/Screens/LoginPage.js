import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const CatPage = () => {
  return (
    <View>
      <Text>Username</Text>
      <TextInput></TextInput>

      <Text>Password</Text>
      <TextInput></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CatPage;
