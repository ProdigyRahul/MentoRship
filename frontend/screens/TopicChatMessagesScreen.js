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
  Keyboard,
  StatusBar,
  Pressable,
  Image,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TopicChatMessagesScreen = ({ route }) => {
  const { topicId, userId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef(null);
  const [topicName, setTopicName] = useState("");
  const [topicImage, setTopicImage] = useState("");

  const fetchTopicData = async () => {
    try {
      const response = await fetch(
        `http://172.20.10.3:8080/topics/${topicId}/details`
      );
      const data = await response.json();
      if (response.ok) {
        setTopicName(data.topicName);
        setTopicImage(data.imageURL);
        console.log("Topic Name:", data.topicName);
        console.log("Topic Image URL:", data.imageURL);
      } else {
        console.error("Error fetching topic data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching topic data:", error);
    }
  };
  useEffect(() => {
    fetchTopicData();
  }, []);
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.rahulmistry.in/topics/${topicId}/messages`
      );
      const data = await response.json();
      if (response.ok) {
        setMessages(data.messages);
        setLoading(false);
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
    // Listen for keyboard events
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        scrollToBottom();
      }
    );

    // Cleanup function
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
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
        scrollToBottom();
      } else {
        console.error("Error sending message:", data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={30} color="black" />
          </Pressable>
          {topicImage && (
            <TouchableOpacity>
              <Image style={styles.userImage} source={{ uri: topicImage }} />
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <Text style={styles.userName}>{topicName}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => console.log("Call")}
            style={{ marginRight: 10 }}
          >
            <MaterialCommunityIcons name="phone" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => console.log("More options")}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </Pressable>
        </View>
      </View>
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
    paddingVertical: 10,
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
    color: "#000000",
    marginLeft: 5,
  },
  sendButton: {
    backgroundColor: "#0077FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 5,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    marginTop: Platform.OS === "ios" ? 35 : 25,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: "cover",
    marginRight: 5,
    marginLeft: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default TopicChatMessagesScreen;
