import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

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

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            marginTop: 40,
        }}>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 5,
                }}>Mentor Availability</Text>
            <View style={{
                width: 400,
                height: 1.5,
                backgroundColor: '#DBD4D4'
            }}></View>
            <ScrollView vertical={true}>
                <Text style={{
                    fontSize: 17,
                    marginTop: 10,
                    paddingHorizontal: 15,
                }}
                >
                    How would you like to make yourself available for the mentor conversation</Text>
                <Text
                    style={{
                        fontSize: 11,
                        color: "#9C9C9C",
                        textAlign: "left",
                        marginTop: 10,
                        paddingHorizontal: 15

                    }}
                >
                    Set your preferences for connections and scheduling conversations
                </Text>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    marginTop: 15,
                    marginBottom: 15,
                    textAlign: 'center'
                }}>Who can connect with you?</Text>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",
                        fontSize: 14
                    }}
                >

                    Anyone or Only members in your org</TextInput>

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
                <NavigationLine active={true} />
                <NavigationLine active={true} />
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
                    Finish
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}