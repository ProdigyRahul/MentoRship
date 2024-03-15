import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../UserContext";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);
  const { userId } = useContext(UserType);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
       
        // Fetch user data from backend
        const response = await fetch(
          `http://172.20.10.3:8080/user-data/${userId}`
        );
        const data = await response.json();

        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleLogout = async () => {
    // Clear AsyncStorage
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }

    // Reset navigation stack to Onboarding screen
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding" }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9", paddingBottom: 0 }}>
    {userData && (
      <>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000", marginTop: 50, textAlign: "left", marginLeft: 10 }}>
          Hi, {userData.name}
        </Text>
        <View style={{ flex: 1, borderTopStartRadius: 50, borderTopEndRadius: 50, backgroundColor: "#FFFFFF", marginTop: 20, alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 15, alignItems: "center", alignSelf: "flex-start", marginLeft: 15 }}>
            <Image source={{ uri: userData.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{userData.name}</Text>
          </View>

        <ScrollView
          vertical={true}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="user" size={16} color="#000" />
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              My Profile
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="users" size={16} color="#000" />
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              My Connections
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="calendar-alt" size={16} color="#000" />
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              My Events
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="clock" size={16} color="#000" />

            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              Mentoring Availability and Preferences
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="cogs" size={16} color="#000" />

            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              Account Settings
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="comment" size={16} color="#000" />

            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              Chat with MentoRship
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="info-circle" size={16} color="#000" />

            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              About MentoRship
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="lock" size={16} color="#000" />

            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleLogout}
          >
            <FontAwesome5 name="sign-out-alt" size={16} color="#000" />
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      </>
    )}
    </SafeAreaView>
  );
}
