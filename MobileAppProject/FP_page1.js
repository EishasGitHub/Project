import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, signInWithEmailLink,fetchSignInMethodsForEmail} from 'firebase/auth';
import firebase from '../firebase';
import StarImage from '../assets/Star.png';
import HeaderFP from "../components/headerFP";
import { LinearGradient } from 'expo-linear-gradient';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function FP_Page_1({ navigation }) {
    // const pressHandlerFP1 = () => {
    //     navigation.push('ForgotPassword_Page_2');
    // };

    const [email, setEmail] = useState('');

    const resetPassword=()=> {
        const auth = getAuth(firebase);

        if (email!=null)
            {
                sendPasswordResetEmail(auth,email)
                .then(()=> {
                    alert("password reset email has been sent successfully");
                    navigation.goBack()
                })
                .catch(()=> {
                    const errorcode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
            }
        else
            {
                alert("Please enter a valid email");
            }
    }

    return (
        <ScrollView style={styles.container}>
            <HeaderFP navigation={navigation} />
            <Image source={StarImage} style={styles.backgroundImage} />

            <Text style={styles.Heading}>Forgot Password</Text>
            <Text style={styles.subheading}>Enter your Registered email ID</Text>
            <Text style={styles.explaination}>We will send a link to your registered email ID to reset password</Text>

            <View style={styles.inputContainer}>

                <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 2, y: 0.5 }}
                    locations={[0, 0.7]}>

                    <Feather name="user" size={20} color="#fff" style={styles.icon} />

                    <TextInput style={styles.emailInput} placeholder="Email ID" placeholderTextColor={'#fff'} onChangeText={text => setEmail(text)} value={email} />

                </LinearGradient>
            </View>

            <View style={{ marginTop: 250, alignItems: 'center' }}>
                <TouchableOpacity onPress={resetPassword}>
                    <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.nextButton}>

                        <Text style={styles.buttonText}>Send</Text>

                    </LinearGradient>
                </TouchableOpacity>

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    Heading: {
        fontSize: 32,
        color: '#4D8D72',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 30
    },

    subheading: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 150,
        paddingHorizontal: 20
    },

    explaination: {
        fontSize: 10,
        color: 'black',
        paddingHorizontal: 20
    },

    inputContainer: {
        // flex: 0.2,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },

    emailInput: {
        // paddingHorizontal: 10,
        height: 40,
        width: 334,
        color: 'white',

    },

    nextButton: {
        borderRadius: 10,
        width: 333,
        height: 61,
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',

    },

    gradient: {
        borderRadius: 8,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    icon: {
        flex: 1,
        textAlign: 'center',
        padding: 5,
        marginTop: 5
    },
    backgroundImage: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '110%',
        height: '60%',
        bottom: 160,
    }

});