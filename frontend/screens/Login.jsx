import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const Login = () => {
    return (
        <SafeAreaView style={tw`flex-1 mt-15 items-center pb-10`}>

            <Image style={{ width: 120, height: 120, marginTop: 10, marginBottom: 20 }} source={require('../assets/Logo.png')} />
            <Text style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 10 }}>MentoRship</Text>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Have an account?</Text>
            <Text style={{ marginTop: 30, fontSize: 15, marginBottom: 10 }}>Login with one of these services</Text>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]}>
                    <FontAwesome name="google" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
                    <FontAwesome name="apple" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#0077B5' }]}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 20,
                    // marginHorizontal: 40,
                }}>
                <View
                    style={{
                        width: 100,
                        height: 1.5,
                        backgroundColor: "#09a1f6",
                    }}>
                </View>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginHorizontal: 20,
                    }}>
                    {"or"}
                </Text>
                <View
                    style={{
                        width: 100,
                        height: 1.5,
                        backgroundColor: "#09a1f6",
                    }}>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    socialButton: {
        borderRadius: 20,
        padding: 21,
        marginHorizontal: 20,
    },
});

export default Login;
