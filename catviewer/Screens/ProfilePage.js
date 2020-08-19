import * as React from "react";
import react from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";

class ProfilePage extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <TouchableHighlight>
          <Image
            source={{
              uri:
                "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            }}
            style={{ width: 200, height: 200 }}
          />
        </TouchableHighlight>
        <Text>Kevin Stevanus</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfilePage;
