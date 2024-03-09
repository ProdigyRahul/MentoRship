import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

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
    const [education, setEducation] = useState('');
    const [degree, setDegree] = useState('');
    const [major, setMajor] = useState('');
    const [gradyear, setGradyear] = useState('');
    const [headline, setHeadline] = useState('');
    const [experience, setExperience] = useState('');

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
                }}>Education Experience</Text>
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
                    Share your educational and professional background with the community.</Text>
                <Text
                    style={{
                        fontSize: 11,
                        color: "#9C9C9C",
                        textAlign: "left",
                        marginTop: 10,
                        paddingHorizontal: 15

                    }}
                >
                    Affiliation(optional)
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
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: '#F1F1F3',
                        borderRadius: 5,
                        marginTop: 10,
                        marginLeft: 5,
                        borderLeftColor: '#D9D9D9',

                    }}></View>
                    <Text style={{
                        fontSize: 14,
                        paddingHorizontal: 10,

                    }}>I do not have college experience</Text>
                </View>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Education *</Text>
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
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Degree *</Text>
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
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Major *</Text>
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
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Grad Year *</Text>
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
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Headline *</Text>
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
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Experience *</Text>
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
    )
}