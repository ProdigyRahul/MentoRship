import { View, Text, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const data = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Members' },
    { id: 3, text: 'Sessions' },
    { id: 4, text: 'Topics' },
    { id: 5, text: 'Companies/Orgs' }
];

export default function Companies() {
    const renderItem = ({ item }) => (
        <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'left',
            marginRight: 20
        }}>{item.text}</Text>
    );

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

                }}>Community</Text>

                <View style={{
                    flex: 1,
                    borderTopStartRadius: 50,
                    borderTopEndRadius: 50,
                    backgroundColor: "#FFFFFF",
                    marginTop: 20,

                }}>
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}
                    />

                    <View style={{
                        flexDirection: 'row',
                        gap: 20,
                        marginTop: 30,
                        alignItems: 'flex-start'
                    }}>

                    </View>
                    <ScrollView vertical={true}
                        style={{

                            marginRight: -5,
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginHorizontal: 20,
                            marginTop: 10
                        }}>Participating Companies/Organisations</Text>

                        <View style={{
                            width: 300,
                            height: 300,
                            bordborderColor: "#D9D9D9",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 20,
                            alignItems: 'center',
                            padding: 20,
                            marginHorizontal: 30

                        }}>
                            <Image source={require('../assets/charusat.png')}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,

                            }}>Charusat University</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                marginTop: 10
                            }}>NAAC A+</Text>

                            <Text style={{
                                fontWeight: 'bold',
                                marginTop: 10,
                                textAlign: 'center'
                            }}>Ranked among Top 150 Universities among India</Text>

                        </View>

                        <View style={{
                            width: 300,
                            height: 300,
                            bordborderColor: "#D9D9D9",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 20,
                            alignItems: 'center',
                            padding: 20,
                            marginHorizontal: 30

                        }}>
                            <Image source={require('../assets/MentoRship.png')}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,

                            }}>MentoRship</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                marginTop: 10
                            }}>Best app in the world to find Mentors</Text>
                        </View>


                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
} 