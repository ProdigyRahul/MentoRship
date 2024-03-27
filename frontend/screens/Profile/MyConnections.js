import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { UserType } from "../../UserContext";
import { LinearGradient } from "expo-linear-gradient";

export default function MyConnections({ navigation }) {
  const [friends, setFriends] = useState([]);
  const [friendIds, setFriendIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useContext(UserType);

  useEffect(() => {
    // Fetch friends data from backend API
    fetchFriendsData();
  }, []);

  const fetchFriendsData = async () => {
    try {
      // Fetch friends data from backend API
      const response = await fetch(
        `http://172.20.10.3:8080/user-friends/${userId}`
      );
      const { friends, friendIds } = await response.json();
      setFriends(friends);
      setFriendIds(friendIds);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching friends data:", error);
      // Handle error
    }
  };

  const handleChatPress = (friendId) => {
    navigation.navigate("Messages", { recipientId: friendId });
  };
  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Connections</Text>
        <View style={styles.friendsContainer}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000" />
              <Text style={styles.loadingText}>Please wait...</Text>
            </View>
          ) : (
            <ScrollView>
              {friends.map((friend, index) => (
                <View key={index} style={styles.friendItem}>
                  <Image source={{ uri: friend.image }} style={styles.image} />
                  <View style={styles.friendDetails}>
                    <Text style={styles.name}>{friend.name}</Text>
                    <Text style={styles.headline}>{friend.headline}</Text>
                  </View>
                  <Pressable
                    onPress={() => handleChatPress(friendIds[index])}
                    style={({ pressed }) => [
                      styles.icon,
                      pressed && { backgroundColor: "#ddd" },
                    ]}
                  >
                    <Icon
                      name="paper-plane"
                      size={20}
                      color="#000"
                      style={styles.icon}
                    />
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 45,
    textAlign: "left",
    marginLeft: 20,
  },
  friendsContainer: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 25,
  },
  friendDetails: {
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  headline: {
    fontSize: 14,
    color: "#666666",
  },
  icon: {
    marginLeft: "auto",
    marginRight: 25,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});
