// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TabBarIOS } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

import ListCatPage from "./Screens/ListCatPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
function ProfileScreen() {
  return <ListCatPage></ListCatPage>;
}

function AccountScreen() {
  return <View />;
}

function SettingsScreen() {
  return <View />;
}

function SignatureScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CatList" component={ProfileScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Signature" component={SignatureScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CatPage" component={HomeTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
