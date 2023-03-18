import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login/index";
// import Screen2 from './screens/Screen2/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="route 1" component={Login} options={{ headerShown: false }} />
        {/* <Stack.Screen name="route 2" component={Screen2} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}