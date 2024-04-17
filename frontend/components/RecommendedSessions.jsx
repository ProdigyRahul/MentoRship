import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecommendedSessions({ navigation }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchRecommendedSessions();
  }, []);

  const fetchRecommendedSessions = async () => {
    try {
      const response = await fetch(
        "https://api.rahulmistry.in/recommended-sessions"
      );
      const data = await response.json();
      setSessions(data.sessions);
    } catch (error) {
      console.error("Error fetching recommended sessions:", error);
    }
  };

  const renderItem = ({ item }) => {
    const sessionDate = new Date(item.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedDate = sessionDate.replace(/\//g, " / ");

    return (
      <Pressable onPress={() => navigation.navigate("Session")}>
        <View
          style={{
            width: 300,
            height: 250, // Increased height to accommodate additional content
            borderRadius: 20,
            backgroundColor: "#F4F4F4",
            marginTop: 20,
            marginHorizontal: 20,
            padding: 10, // Added padding for better spacing
            borderWidth: 1,
            borderColor: "#D9D9D9",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Image
            source={{ uri: item.banner }}
            style={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 10,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            {item.sessionName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            {formattedDate}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Created By: {item.createdBy}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Description: {item.description}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Time: {item.time}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Duration: {item.duration}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={sessions}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, marginBottom: 100 }}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
}
