import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";

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

export default function Welcome() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedParticipation, setSelectedParticipation] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleParticipationSelection = (participation) => {
    setSelectedParticipation(participation);
  };

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
        Welcome to MentoRship
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
          Discover personalized mentorship opportunities tailored to your unique
          needs and aspirations by providing us with basic information about
          yourself.
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 11,
              color: "#9C9C9C",
              textAlign: "left",
              marginTop: 10,
              paddingHorizontal: 15,
              textDecorationLine: "underline",
            }}
          >
            Thought you already completed these steps?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ marginTop: 15, fontWeight: 300 }}>First Name *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Last Name *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Pronouns *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Gender *</Text>
          <View
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 5,
              borderColor: "#D9D9D9",
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => handleGenderChange(itemValue)}
              style={{ height: 50, width: "100%" }}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Rather not say" value="notSay" />
            </Picker>
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>
            Race/Ethinicity *
          </Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Country *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>State *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>City *</Text>
          <TextInput
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
            }}
          ></TextInput>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          What is your primary role?
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => handleRoleSelection("student")}
            style={{
              width: 150,
              height: 60,
              backgroundColor:
                selectedRole === "student" ? "#09A1F6" : "#F1F1F3",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="book"
              size={20}
              color={selectedRole === "student" ? "#fff" : "#000"}
            />
            <Text
              style={{ color: selectedRole === "student" ? "#fff" : "#000" }}
            >
              Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleRoleSelection("professional")}
            style={{
              width: 150,
              height: 60,
              backgroundColor:
                selectedRole === "professional" ? "#09A1F6" : "#F1F1F3",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="briefcase"
              size={20}
              color={selectedRole === "professional" ? "#fff" : "#000"}
            />
            <Text
              style={{
                color: selectedRole === "professional" ? "#fff" : "#000",
              }}
            >
              Working professional
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          How do you want to participate in the MentoRship community?
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => handleParticipationSelection("findMentor")}
            style={{
              width: 150,
              height: 60,
              backgroundColor:
                selectedParticipation === "findMentor" ? "#09A1F6" : "#F1F1F3",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: selectedParticipation === "findMentor" ? "#fff" : "#000",
              }}
            >
              I want to find a mentor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleParticipationSelection("mentorOther")}
            style={{
              width: 150,
              height: 60,
              backgroundColor:
                selectedParticipation === "mentorOther" ? "#09A1F6" : "#F1F1F3",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color:
                  selectedParticipation === "mentorOther" ? "#fff" : "#000",
              }}
            >
              I want to mentor others
            </Text>
          </TouchableOpacity>
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
        <NavigationLine active={false} />
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
