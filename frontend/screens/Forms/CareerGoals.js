import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
//import { Icon } from 'react-native-vector-icons/Icon';

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

    const [getInternship, setGetinternship] = useState('');
    const [prepareForInterviews, setPrepareforinterviews] = useState('');
    const [buildResume, setBuildresume] = useState('');
    const [prepareForGradSchool, setPrepareforgradschool] = useState('');
    const [communicate, setCommunicate] = useState('');
    const [motivate, setMotivate] = useState('');
    const [buildLeadership, setBuildLeadership] = useState('');
    const [network, setNetwork] = useState('');
    const [managePriorities, setManagePriorities] = useState('');
    const [selfAwareness, setSelfawareness] = useState('');
    const [createWork, setCreateWork] = useState('');
    const [changeRoles, setChangeRoles] = useState('');
    const [createCareerPlans, setCreateCareerPlans] = useState('');
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
                }}>Career Goals</Text>
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
                    Welcome to our comprehensive Career Hub, where your professional journey begins and thrives. Our Career Page is designed to provide you with a wealth of resources and opportunities to navigate the various stages of your career development. Explore the following key sections to unlock your full potential</Text>

                <TextInput
                    placeholder='Search Here'
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

                <TextInput

                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14

                    }}
                >

                    Get Internship/Jobs</TextInput>

                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Prepare for interviews</TextInput>

                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >


                    Build Resume</TextInput>

                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Prepare for Graduate Schools</TextInput>

                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >


                    Communicate Effectively</TextInput>

                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >


                    Motivate, Coach and Develop others</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14

                    }}
                >  Build Leadership Skils</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Network with others</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >


                    Manage Priorities</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Icrease Self Awareness</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Create Work Balance</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                >

                    Change Roles/Career</TextInput>
                <TextInput
                    style={{
                        backgroundColor: "#F1F1F3",
                        width: "100%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",

                        fontWeight: 'bold',
                        fontSize: 14
                    }}
                > Create Career Plans</TextInput>
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