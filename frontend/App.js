import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/Onboardingscreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import Education from "./screens/Forms/Education";
import AreasOfInterest from "./screens/Forms/AreasOfInterest";
import CareerGoals from "./screens/Forms/CareerGoals";
import MentorAvailability from "./screens/Forms/MentorAvailability";
import { UserContext } from "./UserContext";
import MentorRequestScreen from "./screens/MentorRequestScreen";
import TabsWrapper from "./navigation/TabsWrapper";
import Community from "./screens/Community";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <UserContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Education" component={Education} />
            <Stack.Screen name="Interest" component={AreasOfInterest} />
            <Stack.Screen name="Career" component={CareerGoals} />
            <Stack.Screen name="Availability" component={MentorAvailability} />
            <Stack.Screen
              name="MentorRequest"
              component={MentorRequestScreen}
            />
            <Stack.Screen name="Home" component={TabsWrapper} />
            <Stack.Screen name="Community" component={TabsWrapper} />
            <Stack.Screen name="Profile" component={TabsWrapper} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext>
    </>
  );
}

export default App;
