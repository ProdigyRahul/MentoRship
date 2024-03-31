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
import ChatMessagesScreen from "./screens/ChatMessagesScreen";
import Explore from "./screens/Explore";
import MyProfile from "./screens/Profile/MyProfile";
import MyConnections from "./screens/Profile/MyConnections";
import MyEvents from "./screens/Profile/MyEvents";
import CreateNewSession from "./screens/Sessions/CreateNewSession";
import CreateNewTopic from "./screens/Topics/CreateNewTopic";
import Password from "./screens/Profile/Password";
import ChangePassword from "./screens/Profile/ChangePassword";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <UserContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ animation: "slide_from_left" }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ animation: "fade" }}
            />
            <Stack.Screen name="Education" component={Education} />
            <Stack.Screen name="Interest" component={AreasOfInterest} />
            <Stack.Screen name="Career" component={CareerGoals} />
            <Stack.Screen name="Availability" component={MentorAvailability} />
            <Stack.Screen
              name="MentorRequest"
              component={MentorRequestScreen}
            />
            <Stack.Screen
              name="Chat"
              component={TabsWrapper}
              options={{ animation: "slide_from_left" }}
            />
            <Stack.Screen name="Community" component={TabsWrapper} />
            <Stack.Screen name="Profile" component={TabsWrapper} />
            <Stack.Screen
              name="Messages"
              component={ChatMessagesScreen}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="MyConnection" component={MyConnections} />
            <Stack.Screen name="MyEvents" component={MyEvents} />
            <Stack.Screen name="Session" component={CreateNewSession} />
            <Stack.Screen name="Topics" component={CreateNewTopic} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext>
    </>
  );
}

export default App;
