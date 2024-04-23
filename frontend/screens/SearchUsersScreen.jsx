import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { UserType } from "../UserContext";

const SearchUsersScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const { userId } = useContext(UserType);

  useEffect(() => {
    fetchRecentSearches(); // Fetch recent searches when component mounts
  }, []);

  const fetchRecentSearches = async () => {
    try {
      const response = await axios.get(
        "https://api.rahulmistry.in/recent-searches", // Fetch recent searches from backend API
        { userId: userId }
      );
      setRecentSearches(response.data);
    } catch (error) {
      console.error("Error fetching recent searches:", error);
    }
  };

  const searchUsers = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.rahulmistry.in/users/search",
        { searchString: query }
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text); // Update search query state
    if (text.trim() !== "") {
      // Check if search query is not empty
      searchUsers(text); // Fetch data based on the updated search query
    } else {
      setSearchResults([]); // Clear search results if query is empty
    }
  };

  const navigateToPublicProfile = (userId) => {
    navigation.navigate("PublicProfile", { userId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigateToPublicProfile(item._id)}
    >
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userHeadline}>{item.Headline}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={["#000000", "#007CB0"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.3, 1]}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: Platform.OS === "ios" ? 55 : 45,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginRight: 15 }}
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            My Connections
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            backgroundColor: "#FFFFFF",
            marginTop: 20,
          }}
        >
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search users..."
              value={searchQuery}
              onChangeText={handleSearch} // Call handleSearch function on text change
            />
          </View>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000" />
              <Text style={styles.loadingText}>Please wait...</Text>
            </View>
          ) : (
            <>
              <FlatList
                data={recentSearches} // Use recent searches data for rendering
                renderItem={renderItem}
                keyExtractor={(item, index) => item._id || index.toString()} // Use _id if available, otherwise use index
                contentContainerStyle={styles.flatlistContent}
                ListHeaderComponent={
                  <Text style={styles.sectionTitle}>Recent Searches</Text>
                } // Add section title
              />
              <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item, index) => item._id || index.toString()} // Use _id if available, otherwise use index
                contentContainerStyle={styles.flatlistContent}
                ListHeaderComponent={
                  <Text style={styles.sectionTitle}>Search Results</Text>
                } // Add section title
              />
            </>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  flatlistContent: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userHeadline: {
    fontSize: 14,
    color: "#666",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SearchUsersScreen;
