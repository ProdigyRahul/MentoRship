import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Platform,
} from "react-native";
import { UserType } from "../UserContext";
import axios from "axios";
import User from "../components/User";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function Explore({ navigation }) {
  const { userId, setUserId } = useContext(UserType);
  const [category, setCategory] = useState("Friends");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    let url = "";
    switch (category) {
      case "Friends":
        url = `https://api.rahulmistry.in/friends/${userId}`;
        break;
      case "Request Sent":
        url = `https://api.rahulmistry.in/friend-requests/sent/${userId}`;
        break;
      case "Add Friend":
        url = `https://api.rahulmistry.in/users/${userId}`;
        break;
      default:
        break;
    }

    try {
      const response = await axios.get(url);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [category]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  if (loading) {
    return (
      <LinearGradient
        colors={["#000000", "#007CB0"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.3, 1]}
      >
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={{ marginTop: 10, color: "#FFFFFF" }}>Please wait...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <StatusBar barStyle="white-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 45,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 15 }}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          Explore
        </Text>
      </View>
      <View style={styles.friendsContainer}>
        <View style={{ marginTop: 10, marginLeft: 10, padding: 10 }}>
          <FlatList
            horizontal
            data={[
              { id: "Friends", text: "Friends" },
              { id: "Request Sent", text: "Request Sent" },
              { id: "Add Friend", text: "Add Friend" },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  item.id === category && { backgroundColor: "#09A1F6" },
                ]}
                onPress={() => handleCategoryChange(item.id)}
              >
                <Text style={styles.text}>{item.text}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.userList}>
          <FlatList
            data={users}
            renderItem={({ item }) => <User item={item} category={category} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  friendsContainer: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  userList: {
    padding: 10,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 15,
    color: "black",
  },
  buttonContainer: {
    marginBottom: 150,
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
