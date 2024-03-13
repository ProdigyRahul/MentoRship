import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
          `http://172.16.102.203:8080/users/${userId}`
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
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
          width: "100%",
          height: 1.5,
          backgroundColor: "#D9D9D9",
          marginTop: 10,
        }}
      ></View>
      <View style={{ flex: 1, padding: 10 }}>
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
