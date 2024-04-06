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
export default function Members() {
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
                            marginTop: 30
                        }}>Recommended Mentors</Text>

                        <View style={{
                            marginTop: 20,
                            width: 200,
                            height: 150,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 2,
                            alignItems: 'center',
                            marginHorizontal: 90
                        }}>

                            <Image
                                source={require('../assets/User.png')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Melita Castelino</Text>
                            <TouchableOpacity style={{
                                width: 100,
                                height: 30,
                                borderRadius: 20,
                                backgroundColor: '#000000',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: '#ffffff'
                                }}>Connect</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            marginTop: 20,
                            width: 200,
                            height: 150,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 2,
                            alignItems: 'center',
                            marginHorizontal: 90
                        }}>
                            <Image
                                source={require('../assets/User2.png')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Rahul Mistry</Text>
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
                                }}>Connect</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: 20,
                            width: 200,
                            height: 150,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 2,
                            alignItems: 'center',
                            marginHorizontal: 90
                        }}>
                            {/* <Image
                            source={require('../assets/User2.png')}
                            style={{
                                width: 60,
                                height: 60,
                                marginTop: 20
                            }} /> */}
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Amit Thakkar</Text>

                        </View>
                        <View style={{
                            marginTop: 20,
                            width: 200,
                            height: 150,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            borderColor: "#D9D9D9",
                            borderWidth: 2,
                            alignItems: 'center',
                            marginHorizontal: 90
                        }}>
                            {/* <Image
                            source={require('../assets/User2.png')}
                            style={{
                                width: 60,
                                height: 60,
                                marginTop: 20
                            }} /> */}
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Harshul Yagnik</Text>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}