import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function MyProfile() {
    const [selectedParticipation, setSelectedParticipation] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    const handleParticipationSelection = (participation) => {
        setSelectedParticipation(participation);
    };
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#92D6D9'
        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#FFFFFF",
                marginTop: 37,
                textAlign: "left",
                marginLeft: 20,
            }}>My Profile</Text>
            <ScrollView
                vertical={true}
                style={{
                    flex: 1,
                    marginRight: -5,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderTopStartRadius: 50,
                        borderTopEndRadius: 50,
                        backgroundColor: "#FFFFFF",
                        marginTop: 20,


                    }}
                >

                    <Text style={{
                        marginTop: 20,
                        marginLeft: 30
                    }}>Update Profile Photo</Text>
                    <Text style={{
                        marginTop: 10,
                        marginLeft: 30,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>Headline</Text>
                    <TextInput style={{
                        backgroundColor: "#FFFFFF",
                        width: "95%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",
                        borderWidth: 1,
                        margin: 10
                    }}></TextInput>
                    <View style={{
                        flexDirection: 'row',
                        gap: 150,
                        alignItems: 'center',
                        marginLeft: 30
                    }}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>Country</Text>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>State</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        gap: 50,
                        alignItems: 'center',
                        marginLeft: 30
                    }}>
                        <TextInput style={{
                            backgroundColor: "#FFFFFF",
                            width: "40%",
                            height: 50,
                            borderRadius: 20,
                            marginTop: 15,
                            paddingHorizontal: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 1,

                        }}></TextInput>
                        <TextInput style={{
                            backgroundColor: "#FFFFFF",
                            width: "40%",
                            height: 50,
                            borderRadius: 20,
                            marginTop: 15,
                            paddingHorizontal: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 1,

                        }}></TextInput>
                    </View>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>City</Text>
                    <TextInput style={{
                        backgroundColor: "#FFFFFF",
                        width: "40%",
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",
                        borderWidth: 1,
                        marginLeft: 30

                    }}></TextInput>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Personal Details</Text>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Gender</Text>
                    {/* dropdown */}
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Race/Ethinicity</Text>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Contact</Text>
                    <View style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'flex-start',
                        marginLeft: 30,
                        marginTop: 10
                    }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/linkedIn.png')}
                                style={{
                                    height: 50,
                                    width: 50,

                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/instagram.png')}
                                style={{
                                    height: 50,
                                    width: 50,

                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/fb.png')}
                                style={{
                                    height: 50,
                                    width: 50,
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/twitter.png')}
                                style={{
                                    height: 50,
                                    width: 50,

                                }}
                            />
                        </TouchableOpacity>


                    </View>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Bio</Text>
                    <TextInput style={{
                        backgroundColor: "#FFFFFF",
                        width: "95%",
                        height: 70,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",
                        borderWidth: 1,
                        margin: 10
                    }}></TextInput>
                    <Text style={{
                        fontWeight: 'bold',
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30
                    }}>MentoRship Objectives</Text>
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
                                width: 165,
                                height: 60,

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

                                }}
                            >
                                I want to mentor others
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        marginLeft: 30,
                        fontWeight: 'bold'
                    }}>Interest</Text>
                    <TextInput style={{
                        backgroundColor: "#FFFFFF",
                        width: "95%",
                        height: 70,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: "#D9D9D9",
                        borderWidth: 1,
                        margin: 10
                    }}></TextInput>
                    <TouchableOpacity style={{
                        marginTop: 10,
                        marginLeft: 30

                    }}><Text style={{
                        fontSize: 16,
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>Education Experience</Text></TouchableOpacity>
                    <View style={{
                        width: 300,
                        height: 1.5,
                        backgroundColor: '#D9D9D9',
                        marginTop: 15,
                        marginLeft: 30

                    }}>
                    </View>
                    <TouchableOpacity style={{
                        marginTop: 10,
                        marginLeft: 30

                    }}><Text style={{
                        fontSize: 16,
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>Areas of Interest</Text></TouchableOpacity>
                    <View style={{
                        width: 300,
                        height: 1.5,
                        backgroundColor: '#D9D9D9',
                        marginTop: 15,
                        marginLeft: 30

                    }}>
                    </View>
                    <TouchableOpacity style={{
                        marginTop: 10,
                        marginLeft: 30


                    }}><Text style={{
                        fontSize: 16,
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>Career Goals</Text></TouchableOpacity>
                    <View style={{
                        width: 300,
                        height: 1.5,
                        backgroundColor: '#D9D9D9',
                        marginTop: 15,
                        marginLeft: 30

                    }}>
                    </View>
                    <TouchableOpacity style={{
                        marginTop: 10,
                        marginLeft: 30


                    }}><Text style={{
                        fontSize: 16,
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>MentoRship Availability</Text></TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: 'bold'
                    }}>How do you want to participate in MemtoRship Community?</Text>
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
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}