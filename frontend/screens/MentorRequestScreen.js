import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import MentorRequest from "../components/MentorRequest";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MentorRequestScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [loading, setLoading] = useState(true);
  const [friendRequests, setFriendRequests] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get(
        `https://api.rahulmistry.in/friend-request/${userId}`
      );
      if (response.status === 200) {
        const friendRequestsData = response.data.map((friendRequest) => ({
          _id: friendRequest._id,
          name: friendRequest.name,
          image: friendRequest.image,
        }));

        setLoading(false);
        setFriendRequests(friendRequestsData);
      }
    } catch (err) {
      console.log("error message", err);
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <StatusBar barStyle="white-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: Platform.OS === "ios" ? 55 : 45,
        }}
      >
        <TouchableOpacity onPress={navigateBack} style={{ marginRight: 15 }}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          Notifications
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "#FFFFFF",
          marginTop: 20,
        }}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <ActivityIndicator size="large" color="#000" />
            <Text style={{ marginTop: 10, fontSize: 16 }}>Please wait...</Text>
          </View>
        ) : (
          <View style={{ padding: 10, marginHorizontal: 15, marginTop: 15 }}>
            {friendRequests.length > 0 ? (
              friendRequests.map((item, index) => (
                <MentorRequest
                  key={index}
                  item={item}
                  friendRequests={friendRequests}
                  setFriendRequests={setFriendRequests}
                />
              ))
            ) : (
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                No Notifications
              </Text>
            )}
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default MentorRequestScreen;
