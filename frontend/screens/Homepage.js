import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
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

  console.log("users", users);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#D9D9D9",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        MentoRship Conversations
      </Text>
      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 10,
            textAlign: "justify",
          }}
        >
          Your Conversations:
        </Text>
        <View
          style={{
            width: "100%",
            height: 1.5,
            backgroundColor: "#D9D9D9",
            marginTop: 10,
          }}
        ></View>
        <TouchableOpacity>
          <View></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
