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
  StatusBar,
} from "react-native";
import axios from "axios";
import { UserType } from "../UserContext";

export default function VerifyOTP({ navigation }) {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(null);
  const inputRefs = useRef([]);
  const { userId } = useContext(UserType);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [cooldownTimer, setCooldownTimer] = useState(60);
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    // Fetch user's name and image from the backend API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.rahulmistry.in/${userId}/image`
        );
        setUserName(response.data.name);
        setUserImage(response.data.image);
        setUserDataLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserDataLoading(false);
      }
    };

    fetchUserData();

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
  }, [resendDisabled, userId]);

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
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30, // Adjusted margin-top here
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: 100,
              width: 100,
              marginBottom: 10, // Adjusted margin-bottom here
            }}
          />
          <Text
            style={{
              fontSize: 48,
              fontWeight: "bold",
              marginBottom: 5, // Adjusted margin-bottom here
              color: "#000000",
            }}
          >
            MentoRship
          </Text>
          {userDataLoading ? (
            <ActivityIndicator color="#000000" size="small" />
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 60,
              }}
            >
              {userImage && (
                <Image
                  source={{ uri: userImage }}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    marginRight: 10,
                  }}
                />
              )}
              <Text
                style={{ fontSize: 28, fontWeight: "bold", color: "#000000" }}
              >
                Hi {userName}
              </Text>
            </View>
          )}
          <Text style={{ fontSize: 16, marginTop: 10, marginHorizontal: 20 }}>
            Please enter the OTP sent to your email.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#F8F8F8",
        }}
      >
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
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
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
    </View>
  );
}
