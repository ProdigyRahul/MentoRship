import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TopicChat = ({ topic }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: topic.imageURL }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.topicName}>{topic.topicName}</Text>
        {/* Additional details if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  topicName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TopicChat;
