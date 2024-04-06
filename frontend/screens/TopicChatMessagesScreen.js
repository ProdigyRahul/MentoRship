import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const TopicChatMessagesScreen = ({ route }) => {
  const { topicId, userId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages for the topic
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `https://api.rahulmistry.in/topics/${topicId}/messages`
        );
        const data = await response.json();
        if (response.ok) {
          // Fetch user information for each message
          const messagesWithNames = await Promise.all(
            data.messages.map(async (message) => {
              const userResponse = await fetch(
                `https://api.rahulmistry.in/users/${message.senderId}`
              );
              const userData = await userResponse.json();
              return {
                ...message,
                senderName: userData.name, // Include sender's name with the message
              };
            })
          );
          setMessages(messagesWithNames);
        } else {
          console.error("Error fetching messages:", data.message);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [topicId]);

  // Function to send a new message
  const sendMessage = async () => {
    try {
      const response = await fetch(
        `https://api.rahulmistry.in/topics/${topicId}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: userId,
            messageType: "text",
            messageText: newMessage,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // Add the new message to the message list
        setMessages([...messages, { ...data.message, sent: true }]);
        // Clear the input field
        setNewMessage("");
      } else {
        console.error("Error sending message:", data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item, index }) => (
          <View style={styles.message}>
            <Text>
              {item.senderName}: {item.message}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  message: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 8,
  },
});

export default TopicChatMessagesScreen;
