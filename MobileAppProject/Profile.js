import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";


import Header1 from "../components/headerChats";

export default function Profile({ navigation }) {

    return (
        <View>
            <Header1  navigation={navigation}/>
            <View style={{ height: '40%', }}>
                <LinearGradient colors={["#4D8D72", "#15271F", "#000"]} style={s.Top}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 2, y: 0.5 }}
                    locations={[0, 0.4, 0.5]}>
                    <View style={s.profilepic}>
                        <Text>profile pic</Text>
                    </View>
                </LinearGradient>
            </View>

            <View style={s.credentials}>
                <Text style={s.details}>Username: </Text>
                <Text style={s.details}>Email: </Text>
                <Text style={s.details}>Password: </Text>
            </View>

            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: 70,}}>
                <LinearGradient colors={["#4D8D72", "#15271F"]} style={s.button}>
                    <Text style={s.buttonText}>Change Password</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

};

const s = StyleSheet.create({

    Top: {
        height: '50%',
        backgroundColor: '#2B4E3F',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        alignItems: 'center',

    },
    profilepic: {
        marginTop: 50,
        width: 200,
        height: 200,
        backgroundColor: '#DCDCDC',
        borderRadius: 100,

        justifyContent: 'center',
        alignItems: 'center'
    },

    credentials: {
        justifyContent: 'center',
        marginLeft: 30,
    },

    details: {
        fontSize: 20,
        padding: 10,
    },

    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 50,
    },

    buttonText: {
        color: 'white',
    },

})