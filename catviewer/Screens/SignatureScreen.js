import * as React from "react";
import SignatureCapture from "react-native-signature-capture";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";

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
        <Text>asd</Text>
      </View>
      //   <View style={{ flex: 1, flexDirection: "column" }}>
      //     <Text style={{ alignItems: "center", justifyContent: "center" }}>
      //       Signature Capture Extended{" "}
      //     </Text>
      //     <SignatureCapture
      //       style={[{ flex: 1 }, styles.signature]}
      //       ref="sign"
      //       onSaveEvent={this._onSaveEvent}
      //       onDragEvent={this._onDragEvent}
      //       saveImageFileInExtStorage={false}
      //       showNativeButtons={false}
      //       showTitleLabel={false}
      //       viewMode={"portrait"}
      //     />

      //     <View style={{ flex: 1, flexDirection: "row" }}>
      //       <TouchableHighlight
      //         style={styles.buttonStyle}
      //         onPress={() => {
      //           this.saveSign();
      //         }}
      //       >
      //         <Text>Save</Text>
      //       </TouchableHighlight>

      //       <TouchableHighlight
      //         style={styles.buttonStyle}
      //         onPress={() => {
      //           this.resetSign();
      //         }}
      //       >
      //         <Text>Reset</Text>
      //       </TouchableHighlight>
      //     </View>
      //   </View>
    );
  }
  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log("dragged");
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
