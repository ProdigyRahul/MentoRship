import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";

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
  const [accounting, setAccounting] = useState("");
  const [finance, setFinance] = useState("");
  const [humanresources, setHumanresources] = useState("");
  const [it, setIt] = useState("");
  const [legal, setLegal] = useState("");
  const [manufacturing, setManufacturing] = useState("");
  const [operations, setOperations] = useState("");
  const [marketingcommunications, setMarketingcommunications] = useState("");
  const [sales, setSales] = useState("");
  const [management, setManagement] = useState("");
  const [leadership, setLeadership] = useState("");
  const [healthcare, setHealthcare] = useState("");
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
        Areas of Interest
      </Text>
      <View
        style={{
          width: 400,
          height: 1.5,
          backgroundColor: "#DBD4D4",
        }}
      ></View>
      <ScrollView vertical={true}>
        <Text
          style={{
            fontSize: 17,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          Select areas of interest and rate your expertise in each to receive
          personalized mentoring recommendations. Rate your expertise with the
          star system (1 - 5) to establish your proficiency.
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: "#9C9C9C",
            textAlign: "left",
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          Your rating are confidential and not displayed on your profile. We
          recommend selecting at least 3 options.
        </Text>

        <TextInput
          placeholder="Search Here"
          style={{
            backgroundColor: "#F1F1F3",
            width: "100%",
            height: 50,
            borderRadius: 100,
            marginTop: 15,
            paddingHorizontal: 20,
            borderColor: "#D9D9D9",
          }}
        ></TextInput>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          height: 10,
          marginVertical: 10,
        }}
      >
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={true} />
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
