import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome5";

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

export default function Education({ navigation }) {
  const [selectedAffilation, setSelectionAffilation] = useState("charusat");
  const [headline, setHeadline] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacterLimit = 60;

  const handleAffilationChange = (affilation) => {
    setSelectionAffilation(affilation);
  };

  const handleHeadlineChange = (text) => {
    if (text.length <= maxCharacterLimit) {
      setHeadline(text);
      setCharacterCount(text.length);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 3,
          left: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon name="chevron-left" size={24} color="#000" />
      </TouchableOpacity>
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

      <ScrollView vertical={true}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          Share your educational and professional background with the community.
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ marginTop: 15, fontWeight: 300 }}>
            Affiliation (optional)
          </Text>
          <View
            style={{
              backgroundColor: "#F1F1F3",
              width: "95%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 5,
              borderColor: "#D9D9D9",
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Picker
              selectedValue={selectedAffilation}
              onValueChange={(itemValue) => handleAffilationChange(itemValue)}
              style={{ height: 50, width: "100%" }}
              mode="dropdown"
            >
              <Picker.Item label="Select Affiliation" value="" />
              <Picker.Item label="Charusat" value="charusat" />
              <Picker.Item label="Rahul Mistry" value="rahul" />
              <Picker.Item label="Melita Castelino" value="melita" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Headline</Text>
          <TextInput
            placeholder="Enter your attention-grabbing headline for your profile"
            style={{
              backgroundColor: "#F1F1F3",
              width: "95%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              borderWidth: 1,
            }}
            onChangeText={(text) => handleHeadlineChange(text)}
            value={headline}
          />
          <Text style={{ marginTop: 5, color: "#9C9C9C" }}>
            {characterCount}/{maxCharacterLimit}
          </Text>
        </View>
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
        <NavigationLine active={false} />
        <NavigationLine active={false} />
        <NavigationLine active={false} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Interest");
        }}
        style={{
          backgroundColor: "#09A1F6",
          padding: 10,
          borderRadius: 30,
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
