import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.screen}>
      <Text>this is for the profile page</Text>
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

export default ProfilePage;
