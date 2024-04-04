import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import MentorRequest from "../components/MentorRequest";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

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

  console.log(friendRequests);

  const navigateBack = () => {
    navigation.goBack();
  };

  const onSwipeRight = () => {
    navigation.goBack();
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 20,
  };
  const onSwipe = (gestureName) => {};
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={{ marginTop: 10, color: "#000000" }}>Please wait...</Text>
      </View>
    );
  }
  return (
    <GestureRecognizer
      onSwipe={(direction) => onSwipe(direction)}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
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
            marginTop: 45,
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
          <View style={{ padding: 10, marginHorizontal: 15, marginTop: 15 }}>
            {friendRequests.length > 0}

            {friendRequests.map((item, index) => (
              <MentorRequest
                key={index}
                item={item}
                friendRequests={friendRequests}
                setFriendRequests={setFriendRequests}
              />
            ))}
          </View>
        </View>
      </LinearGradient>
    </GestureRecognizer>
  );
};

export default MentorRequestScreen;

const styles = StyleSheet.create({});
