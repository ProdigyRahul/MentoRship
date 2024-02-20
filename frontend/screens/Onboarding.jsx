import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = ({ navigation }) => {
  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingCompleted) {
        // Onboarding has been completed, replace Onboarding with Home
        navigation.replace('Login');
      }
    } catch (error) {
      // Handle AsyncStorage error
      console.error('Error reading onboarding status from AsyncStorage:', error);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  const handleSkip = () => {
    // Replace Onboarding with Home
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={tw`flex-1 mt-20 items-center pb-10`}>
      <Image style={{ width: 322, height: 322, borderRadius: 10, marginBottom: 50 }} source={require('../assets/ship-boarding.jpg')} />
      <Text style={{ color: '#333333', fontSize: 28, fontWeight: 'bold', marginBottom: 25 }}>Sail with your mentors</Text>
      <Text style={{
        color: "#677294",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 80,
        width: 307,
      }}>The Mentor App seamlessly connects users with experienced mentors for personalized guidance in their professional or personal pursuits. </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={handleGetStarted}
        style={{
          backgroundColor: '#09A1F6',
          width: 295,
          height: 54,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSkip}>
        <Text style={{ color: '#677294', fontSize: 14, marginTop: 19 }}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
