import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import UserChat from "../components/UserChat";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const ChatsScreen = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const [loading, setLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAcceptedFriends = async () => {
      try {
        const response = await fetch(
          `http://172.20.10.3:8080/accepted-friends/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAcceptedFriends(data);
          setLoading(false);
        }
      } catch (error) {
        console.log("error showing the accepted friends", error);
      }
    };

    const fetchPendingFriendRequests = async () => {
      try {
        const response = await fetch(
          `http://172.20.10.3:8080/friend-request/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setNotificationCount(data.length);
          if (data.length > 0) {
            startAnimation();
          }
        }
      } catch (error) {
        console.log("error fetching pending friend requests", error);
      }
    };

    fetchAcceptedFriends();
    fetchPendingFriendRequests();
  }, []);

  const startAnimation = () => {
    // Define the animation sequence
    Animated.sequence([
      // Move bell downwards
      Animated.timing(animatedValue, {
        toValue: 10,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: -10,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 10,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: -10,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      startAnimation();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const translateStyle = {
    transform: [{ translateY: animatedValue }],
  };

  console.log("friends", acceptedFriends);
  const navigateToMentorRequest = () => {
    setNotificationCount(0);
    navigation.navigate("MentorRequest");
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={{ marginTop: 10, color: "#000000" }}>Please wait...</Text>
      </View>
    );
  }
  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 37,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          MentoRship Chats
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={navigateToMentorRequest}
            style={{ marginRight: 7 }}
          >
            <View style={{ position: "relative" }}>
              <Animated.View style={translateStyle}>
                <MaterialIcons
                  name="notifications"
                  size={24}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              </Animated.View>
              {notificationCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -9,
                    right: 0,
                    height: 17,
                    width: 17,
                    backgroundColor: "red",
                    borderRadius: 20,
                    paddingHorizontal: 5.5,
                    paddingVertical: 1,
                    marginRight: 2,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 11 }}>
                    {notificationCount}
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
          <Pressable onPress={navigateToMentorRequest}>
            <MaterialIcons name="search" size={24} color="white" />
          </Pressable>
        </View>
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
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 10 }}>
            Your Conversations:
          </Text>
          <View style={styles.borderLine}></View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {acceptedFriends.map((item, index) => (
            <UserChat key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  borderLine: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    borderWidth: 0.1,
    marginRight: 20,
  },
});
