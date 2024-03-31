import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ChangePassword() {
  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#92D6D9",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FFFFFF",
            marginTop: 37,
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Password and Security
        </Text>

        <View
          style={{
            flex: 1,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            backgroundColor: "#FFFFFF",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              marginTop: 30,
              fontWeight: "bold",
              fontSize: 16,
              marginHorizontal: 20,
            }}
          >
            Enter Old Password
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              width: "95%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
            }}
          ></TextInput>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 16,
              marginHorizontal: 20,
            }}
          >
            Create New Password
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              width: "95%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
            }}
          ></TextInput>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 16,
              marginHorizontal: 20,
            }}
          >
            Confirm New Password
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              width: "95%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
            }}
          ></TextInput>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#0095d5",
                width: "70%",
                height: 50,
                padding: 10,
                borderRadius: 25,
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
