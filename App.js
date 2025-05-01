import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostList from "./components/PostList";
import Forms from "./components/Forms";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={PostList}
          options={{ title: "Posts" }}
        />
        <Stack.Screen
          name="Forms"
          component={Forms}
          options={{ title: "Edit Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}