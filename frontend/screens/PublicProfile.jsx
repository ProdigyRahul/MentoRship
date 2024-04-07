import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { UserType } from "../UserContext";

const PublicProfile = ({ route }) => {
  const { userId } = route.params;
  const { loggedInUserId } = useContext(UserType);
  const [userData, setUserData] = useState(null);
  const [friendshipStatus, setFriendshipStatus] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.rahulmistry.in/public-profile/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
        checkFriendshipStatus(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const checkFriendshipStatus = async (userData) => {
    try {
      const response = await fetch(
        `https://api.rahulmistry.in/check-friendship/${loggedInUserId}/${userData._id}`
      );
      if (!response.ok) {
        throw new Error("Failed to check friendship status");
      }
      const data = await response.json();
      setFriendshipStatus(data.status);
    } catch (error) {
      console.error("Error checking friendship status:", error);
    }
  };

  const sendFriendRequest = async () => {
    try {
      const response = await fetch(
        "https://api.rahulmistry.in/friend-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: loggedInUserId,
            recepientId: userData._id,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send friend request");
      }
      // Refresh friendship status after sending friend request
      checkFriendshipStatus(userData);
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
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
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FFFFFF",
            marginTop: Platform.OS === "ios" ? 55 : 45,
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Profile
        </Text>

        <View
          style={{
            flex: 1,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            backgroundColor: "#FFFFFF",
            marginTop: 20,
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <Image
            source={{ uri: userData ? userData.image : "../assets/User.png" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 40,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
            {userData ? userData.name : "Dummy Name"}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {userData ? userData.headline : "Dummy Headline"}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {userData ? userData.bio : "Dummy Bio"}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                borderRadius: 20,
                backgroundColor:
                  friendshipStatus === "friends"
                    ? "#0095d5"
                    : friendshipStatus === "request_sent"
                    ? "#CCCCCC"
                    : "#0095d5",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
              onPress={() => {
                if (friendshipStatus !== "friends") {
                  friendshipStatus === "request_sent"
                    ? null
                    : sendFriendRequest();
                }
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color:
                    friendshipStatus === "request_sent" ? "#000000" : "#ffffff",
                }}
              >
                {friendshipStatus === "friends"
                  ? "Friends"
                  : friendshipStatus === "request_sent"
                  ? "Sent Request"
                  : friendshipStatus === "accept_request"
                  ? "Accept Request"
                  : "Add Friend"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                borderRadius: 20,
                backgroundColor: "#0095d5",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ffffff",
                }}
              >
                Message
              </Text>
            </TouchableOpacity>
          </View>

          {/* More sections here with user data */}

          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Skills and Expertise
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Interests and Goals
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Experience and Education
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Reviews
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Contact
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../assets/LinkedIn.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/instagram.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/fb.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/twitter.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Project
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PublicProfile;
