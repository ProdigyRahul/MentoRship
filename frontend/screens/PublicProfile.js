import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export default function PublicProfile() {
    return (
        <LinearGradient
            colors={["#000000", "#007CB0"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0.3, 1]}
        >
            <SafeAreaView style={{
                flex: 1,

            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    marginTop: 37,
                    textAlign: "left",
                    marginLeft: 20,
                }}>Profile</Text>

                <View
                    style={{
                        flex: 1,
                        borderTopStartRadius: 50,
                        borderTopEndRadius: 50,
                        backgroundColor: "#FFFFFF",
                        marginTop: 20,
                    }}
                >
                    <Image source={require('../assets/User.png')}
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 40,
                            alignSelf: 'center'
                        }} />
                    <Text style={{
                        textAlign: 'center'
                    }}>Name</Text>
                    <Text style={{
                        textAlign: 'center'
                    }}>Headline</Text>
                    <Text style={{
                        textAlign: 'center'
                    }}>Bio</Text>
                    <View style={{
                        flexDirection: 'row',
                        gap: 15,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity style={{
                            width: 100,
                            height: 30,
                            borderRadius: 20,
                            backgroundColor: '#0095d5',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffffff'
                            }}>Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 100,
                            height: 30,
                            borderRadius: 20,
                            backgroundColor: '#0095d5',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffffff'
                            }}>Message</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Skills and Expertise</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Interests and Goals</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Experience and Education</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Reviews</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Contact</Text>
                    <View style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'flex-start',
                        marginLeft: 30,
                        marginTop: 20
                    }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/LinkedIn.png')}
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
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginHorizontal: 30
                    }}>Project</Text>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}