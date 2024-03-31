import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

export default function Password() {
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
                backgroundColor: '#92D6D9'
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    marginTop: 37,
                    textAlign: "left",
                    marginLeft: 20,

                }}>Password and Security</Text>

                <View style={{
                    flex: 1,
                    borderTopStartRadius: 50,
                    borderTopEndRadius: 50,
                    backgroundColor: "#FFFFFF",
                    marginTop: 20,

                }}>
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            marginHorizontal: 20,
                            gap: 10,
                            alignItems: 'center'
                        }}>
                            <Icon name="lock" size={20} color="#000" />
                            <Text style={{
                                fontSize: 20,

                                fontWeight: 'bold',

                            }}>Change Password</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            marginHorizontal: 20,
                            gap: 10,
                            alignItems: 'center'
                        }}>
                            <Icon name="user" size={20} color="#000" marginTop='10' />
                            <Text style={{
                                fontSize: 20,

                                fontWeight: 'bold',

                                color: '#0095d5'
                            }}>Close Account</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}