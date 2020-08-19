import * as React from "react";
import SignatureCapture from "react-native-signature-capture";

import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

// const SignaturePage = () => {
//   return (
//     <View style={styles.screen}>
//       <Text>test</Text>
//     </View>
//   );
// };

class SignaturePage extends React.Component {
  render() {
    return (
      <View>
        <Text>test</Text>
        <SignatureCapture></SignatureCapture>
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

export default SignaturePage;
