// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

import ListCatPage from "./Screens/ListCatPage";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("CatPage");
        }}
      ></Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CatPage" component={ListCatPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
