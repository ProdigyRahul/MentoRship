import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserType } from "../UserContext";
import RecommendedSessions from "./RecommendedSessions";

export default function AllComponents() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [userType, setUserType] = useState("");
  const { userId } = useContext(UserType);

  useEffect(() => {
    fetchUserType();
  }, []);

  const fetchUserType = async () => {
    try {
      const response = await fetch(
        `https://api.rahulmistry.in/user-type/${userId}`
      );
      const data = await response.json();
      if (data.isMentor) {
        setUserType("mentor");
        fetchStudents();
      } else if (data.isStudent) {
        setUserType("student");
        fetchMentors();
      }
    } catch (error) {
      console.error("Error fetching user type:", error);
    }
  };

  const fetchMentors = async () => {
    try {
      const response = await fetch("https://api.rahulmistry.in/mentors");
      const data = await response.json();
      setUsers(data.mentors);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://api.rahulmistry.in/students");
      const data = await response.json();
      setUsers(data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const navigateToPublicProfile = (userId) => {
    navigation.navigate("PublicProfile", { userId });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigateToPublicProfile(item._id)}>
      <View
        style={{
          width: 150,
          height: 210,
          backgroundColor: "#F4F4F4",
          borderRadius: 20,
          borderColor: "#D9D9D9",
          borderWidth: 1,
          alignItems: "center",
          marginRight: 15,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#777",
            textAlign: "center",
          }}
        >
          {item.Headline}
        </Text>
      </View>
    </Pressable>
  );

  const onRefresh = () => {
    setRefreshing(true);
    if (userType === "mentor") {
      fetchStudents();
    } else if (userType === "student") {
      fetchMentors();
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ marginBottom: 100 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            color: "#333",
          }}
        >
          {userType === "mentor"
            ? "Recommended Mentees"
            : "Recommended Mentors"}
        </Text>
        <FlatList
          data={users}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={renderItem}
          keyExtractor={(item) => item._id} // Assuming user object has an '_id' field
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Sessions
        </Text>
        <RecommendedSessions />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Topics
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
            color: "#333",
          }}
        >
          Recommended Companies
        </Text>
      </View>
    </ScrollView>
  );
}
