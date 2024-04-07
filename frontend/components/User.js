import React, { useContext } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { UserType } from "../UserContext";

const User = ({ item, category }) => {
  const { userId } = useContext(UserType);

  const renderActionButton = () => {
    switch (category) {
      case "Friends":
        return (
          <Pressable
            style={{
              backgroundColor: "#09A1F6",
              padding: 10,
              width: 105,
              borderRadius: 6,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Message</Text>
          </Pressable>
        );
      case "Request Sent":
        return (
          <Pressable
            style={{
              backgroundColor: "gray",
              padding: 10,
              width: 105,
              borderRadius: 6,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 13 }}>
              Request Sent
            </Text>
          </Pressable>
        );
      case "Add Friend":
        return (
          <Pressable
            style={{
              backgroundColor: "#09A1F6",
              padding: 10,
              borderRadius: 6,
              width: 105,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 13 }}>
              Add Friend
            </Text>
          </Pressable>
        );
      default:
        return null;
    }
  };

  return (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            resizeMode: "cover",
          }}
          source={{ uri: item?.image }}
        />
      </View>

      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item?.name}</Text>
      </View>
      {renderActionButton()}
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({});
