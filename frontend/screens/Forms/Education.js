import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const NavigationLine = ({ active }) => (
  <View
    style={{
      flex: 1,
      height: 5,
      backgroundColor: active ? "#57D5DB" : "#DBD4D4",
      marginHorizontal: 5,
    }}
  />
);

export default function () {
  const [education, setEducation] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [gradyear, setGradyear] = useState("");
  const [headline, setHeadline] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        Education Experience
      </Text>
      <View
        style={{
          width: 400,
          height: 1.5,
          backgroundColor: "#DBD4D4",
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          height: 10,
          marginVertical: 10,
        }}
      >
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={false} />
        <NavigationLine active={false} />
        <NavigationLine active={false} />
      </View>
      <TouchableOpacity
        onPress={() => {
          // TODO
        }}
        style={{
          backgroundColor: "#09A1F6",
          padding: 10,
          borderRadius: 30,
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
