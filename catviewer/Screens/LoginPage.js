import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function LoginPage({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("CatPage");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    alignItems: "center",
    flex: 1,
  },
});

export default LoginPage;
