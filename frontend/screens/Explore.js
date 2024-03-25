import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { UserType } from "../UserContext";
import axios from "axios";
import User from "../components/User";

export default function Explore({ navigation }) {
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `http://172.20.10.3:8080/users/${userId}`
          );
          setUsers(response.data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const navigateToMentorRequest = () => {
    navigation.navigate("MentorRequest");
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#000000" />
        <Text style={{ marginTop: 10, color: "#000000" }}>Please wait...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mentorship Conversations</Text>
      <View style={styles.separator}></View>
      <View style={styles.userList}>
        <FlatList
          data={users}
          renderItem={({ item }) => <User item={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 50,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#D9D9D9",
    marginTop: 10,
  },
  userList: {
    flex: 1,
    padding: 10,
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
