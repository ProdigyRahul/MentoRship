import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import User from "../components/User";

export default function Homepage({ navigation }) {
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;
        setUserId(userId);

        const response = await axios.get(
          `http://172.20.10.3:8080/users/${userId}`
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const navigateToMentorRequest = () => {
    navigation.navigate("MentorRequest");
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToMentorRequest}
        >
          <Text style={styles.buttonText}>Dont touch</Text>
        </TouchableOpacity>
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
