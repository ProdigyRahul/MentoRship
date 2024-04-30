import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

const MembersComponent = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []); // Fetch members once when component mounts

  const fetchMembers = async () => {
    try {
      const response = await fetch("https://api.rahulmistry.in/members");
      const data = await response.json();
      if (response.ok) {
        setMembers(data.members);
      } else {
        console.error("Error fetching members:", data.message);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchMembers();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginTop: 20,
        width: 200,
        height: 150,
        backgroundColor: "#F4F4F4",
        borderRadius: 20,
        borderColor: "#D9D9D9",
        borderWidth: 2,
        alignItems: "center",
        marginHorizontal: 90,
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
        style={{ width: 60, height: 60, marginTop: 20 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
      <Text>{item.Headline}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={members}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: "center",
      }} // Align items to center horizontally
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={
        loading ? <ActivityIndicator size="small" color="#000" /> : null
      }
    />
  );
};

export default MembersComponent;
