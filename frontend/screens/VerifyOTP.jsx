import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { UserType } from "../UserContext";

export default function VerifyOTP({ navigation }) {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const { userId } = useContext(UserType);

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.rahulmistry.in/verify-otp",
        { userId, otp }
      );
      setLoading(false);

      if (response.data.message === "OTP is valid") {
        // OTP is valid, check if user is onboarded
        const onboardedResponse = await axios.get(
          `https://api.rahulmistry.in/user-onboarded/${userId}`
        );

        const onboarded = onboardedResponse.data.onboarded;
        if (onboarded) {
          navigation.navigate("Chat");
        } else {
          navigation.navigate("Welcome");
        }
      } else {
        // Invalid OTP
        Alert.alert("Error", "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  const focusNextInput = (index) => {
    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Image
        source={require("../assets/Logo.png")}
        style={{
          height: 100,
          width: 100,
          marginBottom: 20,
          marginTop: 5,
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        MentoRship
      </Text>

      <View style={{ flexDirection: "row" }}>
        {/* OTP input fields */}
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={{
              borderWidth: 1,
              borderColor: "#09A1F6",
              width: 50,
              height: 50,
              textAlign: "center",
              fontSize: 20,
              borderRadius: 10,
              marginRight: 10,
            }}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index] || ""}
            onChangeText={(text) => {
              const newOTP = [...otp];
              newOTP[index] = text;
              setOTP(newOTP.join(""));
              if (text.length === 1) {
                focusNextInput(index);
              }
            }}
            onSubmitEditing={() => {
              if (index === 5) {
                handleVerifyOTP();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                focusPreviousInput(index);
              }
            }}
          />
        ))}
      </View>

      {/* Verify OTP button */}
      <TouchableOpacity
        onPress={handleVerifyOTP}
        style={{
          backgroundColor: "#09A1F6",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text style={{ color: "#FFFFFF", fontSize: 18 }}>Verify OTP</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
