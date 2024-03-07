import { View, Text, SafeAreaView, TouchableOpacity, Touchable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Login({ navigation }) {
    const handleSignup = () => {
        navigation.replace('Signup')
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 70
            }}>

            <Image
                source={require('../assets/Logo.png')}
                style={{
                    height: 100,
                    width: 100,
                    marginBottom: 10
                }}
            />
            <Text style={{
                fontSize: 48,
                fontWeight: 'bold',
                color: '#000000'
            }}>MentoRship</Text>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 10
            }}>Have an Account?</Text>
            <Text style={{
                fontSize: 15,
                marginTop: 10,
                marginBottom: 20
            }}>Login with one of these services</Text>

            <View style={{
                flexDirection: 'row',
                gap: 10
            }}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/Google.png')}
                        style={{
                            height: 60,
                            width: 60,

                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/Apple1.png')}
                        style={{
                            height: 60,
                            width: 60,

                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/LinkedIn.png')}
                        style={{
                            height: 60,
                            width: 60,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                gap: 15,
                marginTop: 10,
                justifyContent: 'space-between',
                alignItems: 'center'

            }}>
                <View style={{
                    width: 100,
                    height: 1.5,
                    backgroundColor: '#09A1F6'
                }}></View>
                <Text>or</Text>
                <View style={{
                    width: 100,
                    height: 1.5,
                    backgroundColor: '#09A1F6'
                }}></View>

            </View>
            <Text style={{
                fontSize: 16,
                marginTop: 10,
            }}>Login With Email</Text>

            <TextInput

                placeholder="Email:"
                style={{
                    backgroundColor: '#D9D9D9',
                    width: '70%',
                    height: 50,
                    borderRadius: 20,
                    marginTop: 15,
                    paddingHorizontal: 20
                }}
            ></TextInput>
            <TextInput

                placeholder="Password:"
                style={{
                    backgroundColor: '#D9D9D9',
                    width: '70%',
                    height: 50,
                    borderRadius: 20,
                    marginTop: 15,
                    paddingHorizontal: 20
                }}
            ></TextInput>
            <TouchableOpacity>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    marginTop: 10

                }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                height: 50,
                width: 250,
                backgroundColor: '#09A1F6',
                borderRadius: 10,
                marginTop: 20,

                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#FFFFFF',
                    fontWeight: 'bold'
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignup}>
                <Text style={{
                    color: '#333333',
                    marginTop: 5
                }}>New to MentoRship? Signup Now</Text>
            </TouchableOpacity>







        </SafeAreaView>
    )
}