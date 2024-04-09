import React, { useState, useRef, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import axios from "axios";
import { UserType } from "../UserContext";

export default function VerifyOTP({ navigation }) {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const { userId } = useContext(UserType);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [cooldownTimer, setCooldownTimer] = useState(60);

  useEffect(() => {
    if (resendDisabled) {
      const timer = setInterval(() => {
        setCooldownTimer((prevTimer) => {
          if (prevTimer === 0) {
            setResendDisabled(false);
            clearInterval(timer);
            return 60;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [resendDisabled]);

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.rahulmistry.in/verify-otp",
        {
          userId,
          otp,
        }
      );
      setLoading(false);

      if (response.status === 200) {
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

  const handleTextInputChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP.join(""));
    if (text.length === 1) {
      focusNextInput(index);
    }
    if (index === 5) {
      Keyboard.dismiss();
    }
  };

  const handleResendOTP = async () => {
    try {
      // Disable resend button and start cooldown timer
      setResendDisabled(true);
    } catch (error) {
      console.error("Error in resending OTP:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
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

      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        MentoRship
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Enter OTP to continue
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
            onChangeText={(text) => handleTextInputChange(text, index)}
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
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Verify OTP
          </Text>
        )}
      </TouchableOpacity>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#000", fontSize: 16 }}>
          Didn't receive the verification OTP?
        </Text>
        <TouchableOpacity onPress={handleResendOTP} disabled={resendDisabled}>
          <Text
            style={{
              color: resendDisabled ? "#ccc" : "#09A1F6",
              fontSize: 16,
              marginLeft: 5,
              fontWeight: resendDisabled ? "normal" : "bold",
            }}
          >
            {resendDisabled
              ? `Resend OTP in ${cooldownTimer}s`
              : "Resend Again"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
