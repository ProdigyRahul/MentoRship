import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

export default function AllComponents() {
  const navigateToPublicProfile = () => {
    navigation.navigate("PublicProfile");
  };

  return (
    <View
      style={{
        marginBottom: 100,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        vertical={true}
        style={{
          marginRight: -5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          Recommended Mentors
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Pressable
            onPress={navigateToPublicProfile}
            style={{ marginRight: 7 }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "#d9d9d9",
                borderRadius: 20,
                borderColor: "#000000",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/User.png")}
                style={{
                  width: 60,
                  height: 60,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Melita Castelino
              </Text>
            </View>
          </Pressable>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "#d9d9d9",
              borderRadius: 20,
              borderColor: "#000000",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/User.png")}
              style={{
                width: 60,
                height: 60,
                marginTop: 20,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Rahul Mistry
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          Recommended Sessions
        </Text>
        <View
          style={{
            width: 300,
            height: 200,
            borderRadius: 20,
            backgroundColor: "#d9d9d9",
            marginTop: 20,
            marginHorizontal: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/poster.jpg")}
            style={{
              width: 150,
              height: 150,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            AI Session
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 30,
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
          }}
        >
          Recommended Companies
        </Text>
      </ScrollView>
    </View>
  );
}
