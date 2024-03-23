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
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUserId } = useContext(UserType);
  const [modalVisible, setModalVisible] = useState(false);
  const [linkModalVisible, setLinkModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFileName, setImageFileName] = useState(""); // Add state for image file name

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
    if (!name || !email || !password) {
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
          image: url,
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

  // Function to handle opening image upload modal
  const handleImageUpload = () => {
    setModalVisible(true);
  };
  // Function to handle clearing the uploaded image
  const handleClearImage = () => {
    setImage(null);
    setImageFileName(""); // Clear the file name
  };

  // Function to handle taking photo with camera
  const handleCamera = async () => {
    try {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "You need to grant camera permission to take photos."
        );
        return;
      }
      // Launch camera to capture photo
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        // Save captured image and set file name
        setImage(result.uri);
        setImageFileName(result.uri.split("/").pop());
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error);
      setModalVisible(false);
    }
  };
  const handleImageUrlInput = (text) => {
    setImageUrl(text);
  };
  // Function to handle choosing photo from library
  const handleGallery = async () => {
    try {
      // Request media library permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "You need to grant media library permission to choose photos."
        );
        return;
      }
      // Launch image library to choose photo
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled && result.uri) {
        // Check if result.uri is not undefined
        // Save chosen image and set file name
        setImage(result.uri);
        setImageFileName(result.uri.split("/").pop());
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error);
      setModalVisible(false);
    }
  };

  // Function to handle pasting image URL
  const handleLinkModalOpen = () => {
    setLinkModalVisible(true);
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
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              onPress={() => setModalVisible(false)}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 10,
                  width: 300,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={handleCamera}
                  style={{ marginBottom: 20, alignItems: "center" }}
                >
                  <FontAwesome name="camera" size={30} color="#3498db" />
                  <Text style={{ fontSize: 18, marginTop: 5 }}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleGallery}
                  style={{ marginBottom: 20, alignItems: "center" }}
                >
                  <FontAwesome name="image" size={30} color="#3498db" />
                  <Text style={{ fontSize: 18, marginTop: 5 }}>
                    Choose from Library
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLinkModalOpen}
                  style={{ marginBottom: 20, alignItems: "center" }}
                >
                  <FontAwesome name="link" size={30} color="#3498db" />
                  <Text style={{ fontSize: 18, marginTop: 5 }}>
                    Paste Image URL
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
          {/* Link Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={linkModalVisible}
            onRequestClose={() => setLinkModalVisible(false)}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              onPress={() => setLinkModalVisible(false)}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 20,
                  borderRadius: 10,
                  width: 300,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, marginBottom: 10 }}>
                  Paste Image URL
                </Text>
                <TextInput
                  placeholder="Enter Image URL"
                  onChangeText={handleImageUrlInput}
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: 200,
                    height: 40,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setLinkModalVisible(false)}
                  style={{
                    backgroundColor: "#3498db",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#FFFFFF" }}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
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
          <TouchableOpacity
            onPress={handleImageUpload}
            style={{
              backgroundColor: "#D9D9D9",
              width: 290,
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Upload Image</Text>
          </TouchableOpacity>
          {image ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ marginRight: 10 }}>{imageFileName}</Text>
              <TouchableOpacity onPress={handleClearImage}>
                <FontAwesome name="times-circle" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ) : null}
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
          <FlashMessage position="top" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
