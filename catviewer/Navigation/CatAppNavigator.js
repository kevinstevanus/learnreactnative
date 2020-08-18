import { createStackNavigator } from "@react-navigation/stack";
import CatPage from "../Screens/ListCatPage";

const Stack = createStackNavigator();

function myStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"></Stack.Screen>
      <Stack.Screen name="Profile"></Stack.Screen>
    </Stack.Navigator>
  );
}
