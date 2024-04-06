import { View, Text, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

const data = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Members' },
    { id: 3, text: 'Sessions' },
    { id: 4, text: 'Topics' },
    { id: 5, text: 'Companies/Orgs' }
];

export default function Sessions() {
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
                        }}>Upcoming Sessions</Text>

                        <View style={{
                            width: 300,
                            height: 400,
                            bordborderColor: "#D9D9D9",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 20,
                            alignItems: 'center',
                            padding: 20,
                            marginHorizontal: 30

                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,

                            }}>AI Workshop</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                gap: 5

                            }}>
                                <Icon name="clock" size={20} color="#000" marginTop='10' />
                                <Text style={{

                                    fontSize: 16,

                                }}>Friday12th April</Text>
                            </View>
                            <Image source={require('../assets/poster.jpg')}
                                style={{
                                    width: 250,
                                    height: 250,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                                marginTop: 10
                            }}>Hosted By Harshul Yagnik</Text>
                        </View>


                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginHorizontal: 20,
                            marginTop: 30
                        }}>Previous Sessions</Text>

                        <View style={{
                            width: 300,
                            height: 400,
                            bordborderColor: "#D9D9D9",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 20,
                            alignItems: 'center',
                            padding: 20,
                            marginHorizontal: 30

                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,

                            }}>DAA Workshop</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                gap: 5

                            }}>
                                <Icon name="clock" size={20} color="#000" marginTop='10' />
                                <Text style={{

                                    fontSize: 16,

                                }}>Friday,5th April</Text>
                            </View>
                            <Image source={require('../assets/poster.jpg')}
                                style={{
                                    width: 250,
                                    height: 250,
                                    marginTop: 20
                                }} />
                            <Text style={{
                                fontWeight: 'bold',
                            }}>Hosted By Amit Thakkar</Text>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}