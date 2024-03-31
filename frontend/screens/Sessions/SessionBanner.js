import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";

import axios from "axios";
import { UserType } from "../../UserContext";
const NavigationLine = ({ active }) => (
  <View
    style={{
      flex: 1,
      height: 5,
      backgroundColor: active ? "#57D5DB" : "#DBD4D4",
      marginHorizontal: 15,
    }}
  />
);

export default function SessionBanner({ navigation }) {
  const [image, setImage] = useState(null);
  const [altText, setAltText] = useState("");
  const { userId, sessionId } = useContext(UserType);

  const handleChooseImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error("Error choosing image:", error);
    }
  };

  const handleUploadImage = async () => {
    navigation.navigate("Schedule");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 3,
          left: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon name="chevron-left" size={24} color="#000" />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Session Banner
      </Text>
      <View
        style={{
          width: 400,
          height: 1.5,
          backgroundColor: "#DBD4D4",
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
            color: "#5A5A5A",
          }}
        >
          Give people an idea about what your session is about and make it
          recognizable for the members.
        </Text>
        <TouchableOpacity
          onPress={handleChooseImage}
          style={{
            backgroundColor: "#F1F1F3",
            width: "100%",
            height: 150,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#09A1F6",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
              key={image} // Add the key prop here
            />
          ) : (
            <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>
              Image Preview
            </Text>
          )}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            color: "#5A5A5A",
          }}
        >
          Banner Image Alt Text (Optional)
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Banner Image Alt Text"
            style={{
              flex: 1,
              height: 40,
              borderColor: "#D9D9D9",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            value={altText}
            onChangeText={setAltText}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          height: 10,
          marginVertical: 10,
        }}
      >
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={false} />
      </View>
      <TouchableOpacity
        onPress={handleUploadImage}
        style={{
          backgroundColor: "#09A1F6",
          padding: 10,
          borderRadius: 30,
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
