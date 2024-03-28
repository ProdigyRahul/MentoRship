import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";

export default function MyEvents() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#92D6D9",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginTop: 37,
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        My Events
      </Text>

      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 30,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Upcoming
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Past
          </Text>
        </View>
        <View
          style={{
            width: 300,
            height: 400,
            bordborderColor: "#D9D9D9",
            borderWidth: 1,
            borderRadius: 50,
            marginTop: 50,
            alignItems: "center",

            padding: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            AI Workshop
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              gap: 5,
            }}
          >
            <Icon name="clock" size={20} color="#000" marginTop="10" />
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Friday,5th April
            </Text>
          </View>
          <Image
            source={require("../../assets/poster.jpg")}
            style={{
              width: 250,
              height: 250,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Hosted By Harshul Yagnik
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
