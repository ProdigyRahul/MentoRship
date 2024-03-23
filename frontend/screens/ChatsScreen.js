import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import UserChat from "../components/UserChat";
import { LinearGradient } from "expo-linear-gradient";

const ChatsScreen = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const acceptedFriendsList = async () => {
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

    acceptedFriendsList();
  }, []);

  console.log("friends", acceptedFriends);

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
        MentoRship Chats
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
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 10 }}>
            Your Conversations:
          </Text>
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

const styles = StyleSheet.create({});
