import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecommendedSessions() {
  const [sessions, setSessions] = useState([]);
  const navigation = useNavigation();

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

  const renderItem = ({ item, index }) => {
    return (
      <Pressable onPress={() => navigation.navigate("Sessions")}>
        <View style={styles.sessionContainer}>
          <Image
            source={{ uri: item.banner }}
            style={styles.sessionImage}
            resizeMode="cover"
          />
          <View style={styles.sessionDetails}>
            <Text style={styles.sessionName}>{item.sessionName}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.hostedByContainer}>
              <Image
                source={{ uri: item.createdBy.image }}
                style={styles.hostedImage}
              />
              <Text style={styles.hostedByText}>
                Hosted by {item.createdBy.name}
              </Text>
              {item.public ? (
                <Pressable style={styles.attendButton}>
                  <Text style={styles.attendButtonText}>Attend</Text>
                </Pressable>
              ) : (
                <Text style={styles.privateSessionText}>Request</Text>
              )}
            </View>
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
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  sessionContainer: {
    width: 300,
    height: 250,
    borderRadius: 20,
    backgroundColor: "#F4F4F4",
    marginTop: 20,
    marginHorizontal: 10,
    overflow: "hidden",
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
  },
  sessionImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sessionDetails: {
    padding: 10,
  },
  sessionName: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    marginBottom: 5,
  },
  hostedByContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  hostedImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  hostedByText: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
  },
  attendButton: {
    backgroundColor: "#09A1F6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  attendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  privateSessionText: {
    color: "#FF0000",
    fontWeight: "bold",
  },
});
