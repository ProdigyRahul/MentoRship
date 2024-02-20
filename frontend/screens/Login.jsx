import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const Login = () => {
    return (
        <SafeAreaView style={tw`flex-1 mt-15 items-center pb-10`}>
            <Image style={{ width: 120, height: 120, marginTop: 10, marginBottom: 10 }} source={require('../assets/Logo.png')} />
            <Text style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 10 }}>MentoRship</Text>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Have an account?</Text>
            <Text style={{ marginTop: 20, fontSize: 15, marginBottom: 10 }}>Login with one of these services</Text>

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
                    marginBottom: 20,
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
            {/* Login with email and password */}
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity style={{ marginBottom: 10 }}
            >
                <Text style={{
                    color: "#000000",
                    fontSize: 16,
                    fontWeight: "bold",
                }}>

                    Forgot password?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#09A1F6',
                    width: 295,
                    height: 54,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
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
    separator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 40,
    },
    line: {
        flex: 1,
        height: 1.5,
        backgroundColor: '#09a1f6',
    },
    orText: {
        color: '#000000',
        fontSize: 12,
        marginHorizontal: 20,
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        marginBottom: 18,
        paddingHorizontal: 20,
        paddingVertical: 22,
        width: '80%',
    },
});

export default Login;
