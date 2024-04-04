import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView,
  Modal,
} from "react-native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import jwt_decode from "jwt-decode";
import { UserType } from "../UserContext";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { FontAwesome } from "@expo/vector-icons";

export default function Signup({ navigation }) {
  // States for user details and image handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserId } = useContext(UserType);
  // Function to display success message
  const showToast = () => {
    showMessage({
      message: "Success",
      description: "User registered successfully!",
      type: "success",
      duration: 1000,
      autoHide: true,
    });
  };

  // Function to navigate to login screen
  const handleLoginNow = () => {
    navigation.navigate("Login");
  };

  // Function to handle signup process
  const handleSignup = async () => {
    if (!name || !email || !password || !imageUrl) {
      Alert.alert(
        "Validation Error",
        "Please fill in all fields and upload an image."
      );
      return;
    }
    setLoading(true);
    try {
      // Send user data to backend for registration
      const response = await fetch("http://172.20.10.3:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert("Signup Failed", errorData.message);
        return;
      }

      const responseData = await response.json();
      console.log("Server Response:", responseData);
      const token = responseData.token;
      AsyncStorage.setItem("authToken", token);
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);

      // Display success message and navigate to welcome screen
      showToast();
      setTimeout(() => {
        navigation.navigate("Welcome");
      }, 1000);
    } catch (error) {
      console.error("Signup failed:", error);
      Alert.alert("Signup Failed", "An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 0,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: 100,
              width: 100,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            MentoRship
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Welcome to MentoRship
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              marginBottom: 20,
              textAlign: "center",
              paddingHorizontal: 50,
            }}
          >
            Join the MentoRship Community with one of these services
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../assets/Google.png")}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/Apple1.png")}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/LinkedIn.png")}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              marginTop: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 100,
                height: 1.5,
                backgroundColor: "#09A1F6",
              }}
            ></View>
            <Text>or</Text>
            <View
              style={{
                width: 100,
                height: 1.5,
                backgroundColor: "#09A1F6",
              }}
            ></View>
          </View>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Signup With Email
          </Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            style={{
              backgroundColor: "#D9D9D9",
              width: 290,
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email:"
            style={{
              backgroundColor: "#D9D9D9",
              width: 290,
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password:"
            secureTextEntry
            style={{
              backgroundColor: "#D9D9D9",
              width: 290,
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setImageUrl(text)}
            placeholder="Image URL:"
            style={{
              backgroundColor: "#D9D9D9",
              width: 290,
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={handleSignup}
            style={{
              height: 50,
              width: 250,
              backgroundColor: "#09A1F6",
              borderRadius: 10,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Create Account
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLoginNow}>
            <Text
              style={{
                color: "#333333",
                marginTop: 5,
              }}
            >
              Already have an account? Login Now
            </Text>
          </TouchableOpacity>
          <FlashMessage position="bottom" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
