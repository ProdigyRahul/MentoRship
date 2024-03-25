import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from 'react-native';

export default function MyConnections() {
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
            }}>My Connections</Text>

            <View style={{
                flex: 1,
                borderTopStartRadius: 50,
                borderTopEndRadius: 50,
                backgroundColor: "#FFFFFF",
                marginTop: 20,
                alignItems: 'center'
            }}>



                <View style={{
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',

                    marginTop: 30
                }}>
                    <Image
                        source={require('../assets/User.png')}
                        style={{
                            width: 50,
                            height: 50,

                        }} />
                    <View style={{
                        flexDirection: 'row',
                        gap: 150
                    }}>
                        <View style={{
                            flexDirection: 'column',
                        }}>
                            <Text>Melita</Text>
                            <Text>Headline</Text>
                        </View>

                        <Icon name="paper-plane" size={20} color="#000" marginTop='10' /></View>
                </View>
                <View style={{
                    width: 300,
                    height: 1.5,
                    backgroundColor: '#D9D9D9',
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',

                    marginTop: 10
                }}>
                    <Image
                        source={require('../assets/User2.png')}
                        style={{
                            width: 50,
                            height: 50,

                        }} />
                    <View style={{
                        flexDirection: 'row',
                        gap: 150
                    }}>
                        <View style={{
                            flexDirection: 'column',
                        }}>
                            <Text>Rahul</Text>
                            <Text>Headline</Text>
                        </View>

                        <Icon name="paper-plane" size={20} color="#000" marginTop='10' /></View>
                </View>



            </View>




        </SafeAreaView>
    )
}