import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";

export default function AllComponents() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await fetch("https://api.rahulmistry.in/mentors");
      const data = await response.json();
      setMentors(data.mentors);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  const navigateToPublicProfile = () => {
    // Navigation logic
  };

  const renderMentor = ({ item }) => (
    <Pressable onPress={navigateToPublicProfile}>
      <View
        style={{
          width: 150,
          height: 180,
          backgroundColor: "#e3e3e3",
          borderRadius: 20,
          borderColor: "#e3e3e3",
          borderWidth: 1,
          alignItems: "center",
          marginRight: 15,
          padding: 10,
          shadowColor: "#fff",
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
          source={{ uri: item.image }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 100 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            color: "#333",
          }}
        >
          Recommended Mentors
        </Text>
        <FlatList
          data={mentors}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={renderMentor}
          keyExtractor={(item) => item._id} // Assuming mentor object has an '_id' field
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Sessions
        </Text>
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
            source={require("../assets/poster.jpg")}
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
            AI Session
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Topics
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Companies
        </Text>
      </View>
    </ScrollView>
  );
}
