import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "SWhsTnlyUnI3TjFRcDV1ZE1XVFFoNlIzZ3NMTkcwaUtsZGNZNTdBNQ==";
const BASE_URL = "https://api.countrystatecity.in/v1";
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

export default function Welcome({ navigation }) {
  // Countries/States/Cities
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then((response) => {
        var count = Object.keys(response.data).length;
        let countryArray = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountryData(countryArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleState = (countryCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStateData(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCity = (countryCode, stateCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCityData(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Others
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedParticipation, setSelectedParticipation] = useState(null);
  const [selectedRace, setSelectedRace] = useState("");

  const handleRaceChange = (race) => {
    setSelectedRace(race);
  };
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
              borderWidth: 1,
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
              borderWidth: 1,
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
              borderWidth: 1,
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
              borderWidth: 1,
            }}
          >
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => handleGenderChange(itemValue)}
              style={{ height: 50, width: "100%" }}
              mode="dropdown"
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Rather not say" value="notSay" />
            </Picker>
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>
            Race/Ethnicity *
          </Text>
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
              borderWidth: 1,
            }}
          >
            <Picker
              selectedValue={selectedRace}
              onValueChange={(itemValue) => handleRaceChange(itemValue)}
              style={{ height: 50, width: "100%" }}
              mode="dropdown"
            >
              <Picker.Item label="Enter your race" value="" />
              <Picker.Item
                label="American Indian or Alaskan Native"
                value="americanIndian"
              />
              <Picker.Item
                label="Hispanic or Latino origin of any race"
                value="hispanicLatino"
              />
              <Picker.Item label="Asian" value="asian" />
              <Picker.Item
                label="Native Hawaiian or Other Pacific Islander"
                value="pacificIslander"
              />
              <Picker.Item
                label="Black or African American"
                value="africanAmerican"
              />
              <Picker.Item label="White" value="white" />
              <Picker.Item label="Unknown" value="unknown" />
              <Picker.Item label="Prefer not to state" value="notToState" />
            </Picker>
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>Country *</Text>
          <View
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Dropdown
              placeholderStyle={{
                fontSize: 16,
              }}
              selectedTextStyle={{
                fontSize: 16,
              }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16,
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={countryData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select country" : "..."}
              searchPlaceholder="Search..."
              value={country}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setCountry(item.value);
                handleState(item.value);
                setCountryName(item.label);
                setIsFocus(false);
                Keyboard.dismiss();
              }}
            />
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>State *</Text>
          <View
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Dropdown
              placeholderStyle={{
                fontSize: 16,
              }}
              selectedTextStyle={{
                fontSize: 16,
              }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16,
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={stateData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select state" : "..."}
              searchPlaceholder="Search..."
              value={state}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setState(item.value);
                handleCity(country, item.value);
                setStateName(item.label);
                setIsFocus(false);
                Keyboard.dismiss();
              }}
            />
          </View>
          <Text style={{ marginTop: 15, fontWeight: 300 }}>City *</Text>
          <View
            style={{
              backgroundColor: "#F1F1F3",
              width: "100%",
              height: 50,
              borderRadius: 20,
              marginTop: 15,
              paddingHorizontal: 20,
              borderColor: "#D9D9D9",
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Dropdown
              placeholderStyle={{
                fontSize: 16,
              }}
              selectedTextStyle={{
                fontSize: 16,
              }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16,
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={cityData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select city" : "..."}
              searchPlaceholder="Search..."
              value={city}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setCity(item.value);
                setCityName(item.label);
                setIsFocus(false);
                Keyboard.dismiss();
              }}
            />
          </View>
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
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderColor: selectedRole === "student" ? "#09A1F6" : "#D9D9D9",
              borderWidth: 0.7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Icon name="book" size={20} color="#000" />
            <Text style={{ color: "#000" }}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleRoleSelection("professional")}
            style={{
              width: 150,
              height: 60,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderColor:
                selectedRole === "professional" ? "#09A1F6" : "#D9D9D9",
              borderWidth: 0.7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Icon name="briefcase" size={20} color="#000" />
            <Text
              style={{
                color: "#000",
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
                selectedParticipation === "findMentor" ? "#09A1F6" : "#fff",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
              marginBottom: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: selectedParticipation === "findMentor" ? "#fff" : "#000",
                textAlign: "center",
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
                selectedParticipation === "mentorOther" ? "#09A1F6" : "#fff",
              textAlign: "center",
              padding: 5,
              borderRadius: 10,
              justifyContent: "center",
              shadowColor: "#000",
              marginBottom: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
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
          navigation.navigate("Education");
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
