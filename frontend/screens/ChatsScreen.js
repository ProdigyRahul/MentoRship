import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
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
  const navigateToMentorRequest = () => {
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
          <Pressable onPress={navigateToMentorRequest}>
            <MaterialIcons
              name="notifications"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
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
