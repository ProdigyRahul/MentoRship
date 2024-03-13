import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#D9D9D9",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 50,
          textAlign: "left",
          marginLeft: 10,
        }}
      >
        Hi, Melita Castelino
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
            gap: 10,
            marginTop: 15,
            alignItems: "center",
            alignSelf: "flex-start",
            marginLeft: 15,
          }}
        >
          <Image
            source={require("../assets/User.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Melita Castelino
          </Text>
        </View>

        <ScrollView
          vertical={true}
          style={{
            flex: 1,
            margin: 5,
          }}
        >
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              My Profile
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              My Connections
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              My Events
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Mentoring Availability and Preferences
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Account Settings
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Chat with MentoRship
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Help
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              About MentoRship
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Terms and services
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 300,
              height: 1.5,
              backgroundColor: "#D9D9D9",
              marginTop: 25,
            }}
          ></View>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
