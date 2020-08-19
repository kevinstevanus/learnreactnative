import * as React from "react";

import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const SignaturePage = () => {
  return (
    <View style={styles.screen}>
      <Text>signature page</Text>
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

export default SignaturePage;
