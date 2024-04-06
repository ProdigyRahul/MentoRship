import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const TopicChatMessagesScreen = ({ route }) => {
  const { topicId, userId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.rahulmistry.in/topics/${topicId}/messages`
      );
      const data = await response.json();
      if (response.ok) {
        setMessages(data.messages);
        setLoading(false);
        scrollToBottom();
      } else {
        console.error("Error fetching messages:", data.message);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 1000);
    return () => clearInterval(interval);
  }, [topicId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

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
        setMessages([
          ...messages,
          { ...data.message, senderName: "You", sent: true },
        ]);
        setNewMessage("");
      } else {
        console.error("Error sending message:", data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.senderId === userId
                  ? styles.myMessage
                  : styles.otherMessage,
              ]}
            >
              <Text
                style={[
                  styles.senderName,
                  message.senderId === userId && styles.senderWhite,
                ]}
              >
                {message.senderName}
              </Text>
              <Text
                style={[
                  styles.messageText,
                  message.senderId === userId && styles.textWhite,
                ]}
              >
                {message.message}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#0077FF",
    color: "#FFFFFF", // Set text color to white for my messages
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E8F0FE",
    color: "#000000",
  },
  senderName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#0077FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  senderWhite: {
    color: "#FFFFFF",
  },

  textWhite: {
    color: "#FFFFFF",
  },
});

export default TopicChatMessagesScreen;
