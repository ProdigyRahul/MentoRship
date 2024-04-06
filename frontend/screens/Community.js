import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Members' },
  { id: 3, text: 'Sessions' },
  { id: 4, text: 'Topics' },
  { id: 5, text: 'Companies/Orgs' }
];

export default function Community() {

  const navigation = useNavigation();

  const navigateToPublicProfile = () => {
    navigation.navigate("PublicProfile");
  };
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
              flexDirection: 'row',
              gap: 15,
              marginTop: 20,
              marginHorizontal: 20
            }}>
              <Pressable
                onPress={navigateToPublicProfile}
                style={{ marginRight: 7 }}
              >
                <View style={{
                  width: 150,
                  height: 150,
                  backgroundColor: '#d9d9d9',
                  borderRadius: 20,
                  borderColor: "#000000",
                  alignItems: 'center'
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
                </View>
              </Pressable>
              <View style={{
                width: 150,
                height: 150,
                backgroundColor: '#d9d9d9',
                borderRadius: 20,
                borderColor: "#000000",
                alignItems: 'center'
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
              </View>
            </View>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 20,
              marginTop: 30
            }}>Recommended Sessions</Text>
            <View style={{
              width: 300,
              height: 200,
              borderRadius: 20,
              backgroundColor: '#d9d9d9',
              marginTop: 20,
              marginHorizontal: 20,
              alignItems: 'center'
            }}>
              <Image
                source={require('../assets/poster.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 20,

                }} />
              <Text style={{
                fontWeight: 'bold',
                fontSize: 16
              }}>AI Session</Text>
            </View>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 20,
              marginTop: 30
            }}>Recommended Topics</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 20,
              marginTop: 30
            }}>Recommended Companies</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

