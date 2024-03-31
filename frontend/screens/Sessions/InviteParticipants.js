import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"; // Changed import
import axios from "axios";
import { UserType } from "../../UserContext";

const NavigationLine = ({ active }) => (
  <View
    style={{
      flex: 1,
      height: 5,
      backgroundColor: active ? "#57D5DB" : "#DBD4D4",
      marginHorizontal: 15,
    }}
  />
);

export default function InviteParticipants({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState({});
  const { userId, sessionId } = useContext(UserType);

  useEffect(() => {
    fetchFriends(userId);
  }, []);

  const fetchFriends = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://172.20.10.3:8080/user-friends/${userId}`
      );
      const { friends } = response.data;
      setFriends(friends);
    } catch (error) {
      console.error("Error fetching friends:", error);
      Alert.alert("Error", "Failed to fetch friends. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFriendSelection = (friendId) => {
    setSelectedFriends((prevSelected) => ({
      ...prevSelected,
      [friendId]: !prevSelected[friendId],
    }));
  };

  const handleInvite = async () => {
    setLoading(true);
    try {
      const invitedFriends = friends
        .filter((friend) => selectedFriends[friend._id])
        .map((friend) => friend._id);
      console.log("Selected Friends:", invitedFriends);
      const response = await axios.post(
        `http://172.20.10.3:8080/invite-friends/${sessionId}`,
        { invitedFriends }
      );
      console.log("Successs");
    } catch (error) {
      console.error("Error inviting friends:", error);
      Alert.alert("Error", "Failed to invite friends. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 3,
          left: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon name="chevron-left" size={24} color="#000" />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Invite Participants
      </Text>
      <View
        style={{
          width: 400,
          height: 1.5,
          backgroundColor: "#DBD4D4",
        }}
      ></View>

      <ScrollView vertical={true}>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              color: "#5A5A5A",
            }}
          >
            Select members for this session. You can invite friends by selecting
            them below.
          </Text>
          <View
            style={[
              styles.searchContainer,
              isFocused ? styles.focusedContainer : null,
            ]}
          >
            <Icon name="search" size={15} color="#9C9C9C" />
            <TextInput
              placeholder="Search Users"
              style={styles.input}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
          {loading ? (
            <ActivityIndicator color="#09A1F6" size="large" />
          ) : (
            friends.map((friend) => (
              <View key={friend._id} style={styles.friendContainer}>
                <TouchableOpacity
                  style={styles.friendInfo}
                  onPress={() => toggleFriendSelection(friend._id)}
                >
                  <Image
                    source={{ uri: friend.image }}
                    style={styles.friendImage}
                  />
                  <Text style={styles.friendName}>{friend.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.selectBox}
                  onPress={(e) => {
                    e.stopPropagation();
                    toggleFriendSelection(friend._id);
                  }}
                >
                  {selectedFriends[friend._id] && (
                    <Icon name="check" size={20} color="#09A1F6" />
                  )}
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          height: 10,
          marginVertical: 10,
        }}
      >
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={false} />
        <NavigationLine active={false} />
      </View>
      <TouchableOpacity
        onPress={handleInvite}
        style={{
          backgroundColor: "#09A1F6",
          padding: 10,
          borderRadius: 30,
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
              fontWeight: "bold",
            }}
          >
            Invite
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = {
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F3",
    width: "100%",
    height: 50,
    borderRadius: 20,
    marginTop: 15,
    paddingHorizontal: 20,
    borderColor: "#D9D9D9",
    borderWidth: 1,
  },
  focusedContainer: {
    borderColor: "#09A1F6",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  friendContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 15,
    width: "100%",
  },
  friendInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  friendName: {
    fontSize: 16,
    color: "#000000",
  },
  selectBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center", // Center the icon vertically
    alignItems: "center", // Center the icon horizontally
  },
  selected: {
    backgroundColor: "#09A1F6",
  },
};
