import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const getDogImage = () => {
  return fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => response.json())
    .then((data) => console.log(data.message[1]));
};

const CatPage = () => {
  console.log(getDogImage());
  return (
    <View style={styles.screen}>
      <View style={styles.test}>
        <Text>test</Text>
        <Image
          source={{
            uri:
              "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>test</Text>
      </View>
    </View>
  );
};
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

export default CatPage;
