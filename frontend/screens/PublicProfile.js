import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const PublicProfile = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://172.20.10.3:8080/public-profile/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData && (
        <View style={styles.profileContainer}>
          <Image source={{ uri: userData.image }} style={styles.profileImage} />
          <Text style={styles.profileName}>{userData.name}</Text>
          {/* Friend Status Button */}
          {/* Slide bar from bottom */}
          {/* Other user details */}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Define styles for friend status button, slide bar, and other user details here
});

export default PublicProfile;
