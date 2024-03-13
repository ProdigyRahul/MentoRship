import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/Homepage";
import Community from "../screens/Community";
import Profile from "../screens/Profile";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const Tab = createBottomTabNavigator();

const TabsWrapper = ({ navigation, route }) => {
  const { name } = route;

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [
            {
              position: "absolute",
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#fff",
              borderRadius: 15,
              height: 60,
              ...styles.shadow,
            },
            null,
          ],
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Homepage"
          component={Homepage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItem}>
                <FontAwesome
                  name="home"
                  size={26}
                  color={focused ? "#000004" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#000004" : "#748c94",
                    fontSize: 11,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItem}>
                <FontAwesome
                  name="users"
                  size={26}
                  color={focused ? "#000004" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#000004" : "#748c94",
                    fontSize: 11,
                  }}
                >
                  Community
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItem}>
                <FontAwesome
                  name="user"
                  size={26}
                  color={focused ? "#000000" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#000000" : "#748c94",
                    fontSize: 11,
                  }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabsWrapper;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#57D5DB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});
