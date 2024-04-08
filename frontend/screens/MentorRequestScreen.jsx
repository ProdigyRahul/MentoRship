import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Platform,
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserType } from "../UserContext";

const MentorRequestScreen = () => {
  const [loading, setLoading] = useState(true);
  const [friendRequests, setFriendRequests] = useState([]);
  const navigation = useNavigation();
  const { userId } = useContext(UserType);
  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get(
        "https://api.rahulmistry.in/friend-request/" + userId
      );
      if (response.status === 200) {
        setFriendRequests(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching friend requests:", error);
    }
  };

  const handleIgnoreRequest = async (userId) => {
    try {
      const response = await axios.post(
        "https://api.rahulmistry.in/reject-friend-request",
        { userId }
      );
      if (response.status === 200) {
        // Refresh friend requests after ignoring
        fetchFriendRequests();
      }
    } catch (error) {
      console.error("Error ignoring friend request:", error);
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={styles.content}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.loadingText}>Please wait...</Text>
          </View>
        ) : (
          <View style={styles.requestsContainer}>
            {friendRequests.length > 0 ? (
              friendRequests.map((request, index) => (
                <View key={index} style={styles.requestItem}>
                  <Text style={styles.requestText}>{request.name}</Text>
                  <TouchableOpacity
                    style={styles.ignoreButton}
                    onPress={() => handleIgnoreRequest(request._id)}
                  >
                    <Text style={styles.ignoreButtonText}>Ignore</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={styles.noRequestsText}>No Notifications</Text>
            )}
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 55 : 45,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#FFFFFF",
  },
  requestsContainer: {
    flex: 1,
  },
  requestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  requestText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  ignoreButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  ignoreButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  noRequestsText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
  },
});

export default MentorRequestScreen;
