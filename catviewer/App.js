// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TabBarIOS } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

import SignaturePage from "./Screens/SignatureScreen";
import ListCatPage from "./Screens/ListCatPage";
import CameraPage from "./Screens/CameraPage";
import ProfilePage from "./Screens/ProfilePage";
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
function CatScreen() {
  return <ListCatPage></ListCatPage>;
}

function ProfileScreen() {
  return <ProfilePage></ProfilePage>;
}

function SignatureScreen() {
  return <SignaturePage />;
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CatList" component={CatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Signature" component={SignatureScreen}></Tab.Screen>
      <Tab.Screen name="Camera" component={CameraPage}></Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CatPage" component={HomeTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
