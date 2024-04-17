import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";

export default function RecommendedSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchRecommendedSessions();
  }, []);

  const fetchRecommendedSessions = async () => {
    try {
      const response = await fetch(
        "https://api.example.com/recommended-sessions"
      );
      const data = await response.json();
      setSessions(data.sessions);
    } catch (error) {
      console.error("Error fetching recommended sessions:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigateToSessionDetail(item._id)}>
      <View
        style={{
          width: 300,
          height: 200,
          borderRadius: 20,
          backgroundColor: "#F4F4F4",
          marginTop: 20,
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
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
            width: 150,
            height: 150,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          {item.sessionName}
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
          }}
        >
          {item.date}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={sessions}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
