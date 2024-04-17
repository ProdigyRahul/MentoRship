import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
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
            height: 250,
            borderRadius: 20,
            backgroundColor: "#F4F4F4",
            marginTop: 20,
            marginHorizontal: 20,
            padding: 10,
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
              height: 120,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {item.sessionName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              {formattedDate}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Created By:</Text>{" "}
              {item.createdBy.name || "Unknown"}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Description:</Text>{" "}
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Time:</Text> {item.time}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Duration:</Text>{" "}
              {item.duration}
            </Text>
          </View>
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
