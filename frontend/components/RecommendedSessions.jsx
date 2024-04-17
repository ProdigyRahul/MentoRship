import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function RecommendedSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
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
      // Format dates before setting them to state
      const formattedSessions = data.sessions.map((session) => ({
        ...session,
        date: formatDate(session.date),
      }));
      setSessions(formattedSessions);
      setLoading(false); // Data loaded, so set loading to false
    } catch (error) {
      console.error("Error fetching recommended sessions:", error);
      setLoading(false); // Error occurred, set loading to false
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
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
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.sessionName}>{item.sessionName}</Text>
            <View style={styles.hostedByContainer}>
              <Image
                source={{ uri: item.createdBy.image }}
                style={styles.hostedImage}
              />
              <Text style={styles.hostedByText}>
                Hosted by{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {item.createdBy.name}
                </Text>
              </Text>
            </View>
            <Text style={styles.sessionType}>
              {item.public ? "Public" : "Private"}
            </Text>
            <View style={styles.buttonContainer}>
              {item.public ? (
                <Pressable style={styles.attendButton}>
                  <Text style={styles.attendButtonText}>Attend</Text>
                </Pressable>
              ) : (
                <Pressable style={styles.privateSessionButton}>
                  <Text style={styles.privateSessionButtonText}>Request</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? ( // Show activity indicator if loading
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#09A1F6" />
        </View>
      ) : (
        <FlatList
          data={sessions}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sessionContainer: {
    width: 300,
    height: 270,
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
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    marginBottom: 5,
  },
  hostedByContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hostedImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  hostedByText: {
    fontSize: 14,
    flexShrink: 1,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  attendButton: {
    backgroundColor: "#09A1F6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  attendButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  privateSessionButton: {
    backgroundColor: "#09A1F6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  privateSessionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  sessionType: {
    fontSize: 12,
    marginTop: 5,
    color: "#666",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
