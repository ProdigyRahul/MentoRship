import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Onboarding = ({navigation}) => {
  const handleGetStarted = () => {
    // Handle the button press event here
    // navigation.navigate('NextScreen');
  };

  const handleSkip = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={tw`flex-1 mt-20 items-center pb-10`}>
      <Image style={{ width: 322, height: 322, borderRadius: 10, marginBottom: 50 }} source={require('../assets/ship-boarding.jpg')} />
      <Text style={{ color: '#333333', fontSize: 28, fontWeight: 'bold', marginBottom: 25 }}>Sail with your mentors</Text>
      <Text style={{
        color: "#677294",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 79,
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
    </View>
  );
};

export default Onboarding;
