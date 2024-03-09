import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboardingscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Homepage from './screens/Homepage';
import Welcome from './screens/Welcome';
import Education from './screens/Forms/Education';
import AreasOfInterest from './screens/Forms/AreasOfInterest';
import CareerGoals from './screens/Forms/CareerGoals';
import MentorAvailability from './screens/Forms/MentorAvailability';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Onboarding" component={Onboarding} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //     <Stack.Screen name="Home" component={Homepage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //<Welcome />
    //<Education />
    <AreasOfInterest />
    //<CareerGoals />
    //<MentorAvailability />

  )
}

export default App

