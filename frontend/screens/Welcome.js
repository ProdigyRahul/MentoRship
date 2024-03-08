import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function Welcome() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 45
            }}>

            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 5
            }}>Welcome to MentoRship</Text>
            <View style={{
                width: 400,
                height: 1.5,
                backgroundColor: '#DBD4D4'
            }}></View>
            <ScrollView vertical={true}>
                <Text style={{
                    fontSize: 17,
                    marginTop: 10
                }}>Discover personalized mentorship opportunities tailored to your unique needs and aspirations by providing us with basic information about yourself.</Text>
                <Text style={{
                    fontSize: 11,
                    color: '#9C9C9C',
                    textAlign: 'left',
                    marginTop: 10
                }}>Thought you already completed these steps?</Text>
                <View style={{
                    width: 220,
                    height: 1,
                    backgroundColor: '#DBD4D4',

                }}></View>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>First Name *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Last Name *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Pronouns *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Gender *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Race/Ethinicity *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>Country *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>State *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{ marginTop: 15, fontWeight: 300 }}>City *</Text>
                <TextInput


                    style={{
                        backgroundColor: '#F1F1F3',
                        width: 300,
                        height: 50,
                        borderRadius: 20,
                        marginTop: 15,
                        paddingHorizontal: 20,
                        borderColor: '#D9D9D9'
                    }}
                ></TextInput>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10

                }}>What is your primary role?</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    marginTop: 10,
                }}>
                    <Text style={{
                        width: 100,
                        height: 60,
                        backgroundColor: '#F1F1F3',
                        textAlign: 'center',
                        padding: 5,
                        borderRadius: 10
                    }}>Student or Recent Graduate</Text>
                    <Text style={{
                        width: 100,
                        height: 60,
                        backgroundColor: '#F1F1F3',
                        textAlign: 'center',
                        padding: 5,
                        borderRadius: 10
                    }}>Working professional</Text>
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10

                }}>How do you want to participate in the MentoRship community?</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    marginTop: 10,
                }}>
                    <Text style={{
                        width: 100,
                        height: 60,
                        backgroundColor: '#F1F1F3',
                        textAlign: 'center',
                        padding: 5,
                        borderRadius: 10
                    }}>I want to find a mentor</Text>
                    <Text style={{
                        width: 100,
                        height: 60,
                        backgroundColor: '#F1F1F3',
                        textAlign: 'center',
                        padding: 5,
                        borderRadius: 10
                    }}>I want to mentor other</Text>
                </View>
            </ScrollView>
        </SafeAreaView>






    )
}