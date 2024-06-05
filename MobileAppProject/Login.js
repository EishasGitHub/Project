import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

import HeaderLogin from '../components/HeaderLogin';

import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';

export default function Login({ navigation }) {
    const ForgotPassword = () => {
        navigation.push('ForgotPassword_Page_1');
    }

    const Login = () => {
        navigation.push('Home_Page');
    }

    const [passwordState, setpasswordState] = useState(true)
    const [iconEye, seticonEye] = useState('eye-with-line')

    const passwordToggle = () => {

        if (passwordState == true) {
            setpasswordState(false);
            seticonEye('eye')
        }

        else {
            setpasswordState(true);
            seticonEye('eye-with-line')
        }
    }

    const [rembMe, setrembMe] = useState('square')

    const userToggle = () => {

        if (rembMe == 'square') {
            setrembMe('check-square')
        }

        else {
            setrembMe('square')
        }
    }

    const [user, setUser] = useState({ Email: '' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const auth = getAuth(firebase);

        user.Email = email; 

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Home_Page', user);
            })

            .catch(error => {
                Alert.alert('Error', 'Incorrect email or password',
                    [
                        {
                            text: 'Try Again'
                        }
                    ]
                );
            });
    };


    return (
        <>
            <View style={styles.Page}>

                <HeaderLogin navigation={navigation}/>

                <Text style={styles.Heading}>Student Violation Record Management</Text>

                <View style={styles.Main}>
                    <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradientMain}>

                        <View style={styles.mainInput}>

                            <View style={styles.username}>
                                <Octicons name='person' size={30} color='white' style={{ marginLeft: 5, marginRight: 2 }} />
                                <TextInput style={styles.inputUser} placeholder='Email' onChangeText={text => setEmail(text)} value={email} />
                            </View>

                            <View style={styles.password}>
                                <Entypo name='lock' size={30} color='white' />
                                <View style={styles.inputBox}>
                                    <TextInput style={styles.input} secureTextEntry={passwordState} placeholder='Password' onChangeText={text => setPassword(text)} value={password} />
                                    <TouchableOpacity onPress={passwordToggle}>
                                        <Entypo name={iconEye} size={20} color='#4D8D72' />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>


                        <View style={styles.idk}>


                            <TouchableOpacity style={styles.rememberMe} onPress={userToggle}>
                                <Feather name={rembMe} size={25} color='white' />
                                <Text style={styles.rememberMeText}>Remember Me</Text>
                            </TouchableOpacity>


                            <View style={styles.forgotPass}>
                                <Text style={styles.link} onPress={ForgotPassword}>Forgot Password</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin} title='Login'>
                    <LinearGradient colors={["#4D8D72", "#15271F", "#000"]} style={styles.gradientButton}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 2, y: 0.5 }}
                        locations={[0, 0.4, 0.5]}>

                        <Text style={styles.button}>Login</Text>

                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </>
    );
}


const styles = StyleSheet.create({

    Page: {
        alignItems: 'center',
        textAlign: 'center',
        // backgroundColor: 'black'
    },

    Heading: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#4D8D72',
        padding: 30,
        fontSize: 32,
        fontWeight: 'bold',
    },

    Main: {
        marginTop: 50,
        width: 340,
        height: 250,
        backgroundColor: '#4D8D72',
        // backgroundColor: 'white', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1,
    },

    gradientMain: {
        width: 340,
        height: 250,
        backgroundColor: '#4D8D72',
        // backgroundColor: 'white', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainInput: {
        marginBottom: 50,
        marginTop: 20,
    },

    username: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        // justifyContent: 'center'
    },

    password: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },

    inputBox: {
        flexDirection: 'row',
        marginLeft: 10,
        height: 35,
        backgroundColor: 'white',
        width: 260,
        borderRadius: 10,
        alignItems: 'center'

    },

    input: {
        height: 35,
        width: 230,
        padding: 5,
        borderRadius: 10,
        fontSize: 20,
        justifyContent: 'center',
    },

    inputUser: {
        height: 35,
        width: 260,
        margin: 12,
        // borderWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        // borderBottomWidth: 4,
        fontSize: 20,
        justifyContent: 'center',
        // color: 'white',

    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 108,
        height: 42,
        backgroundColor: '#4D8D72',
        borderRadius: 15,
        marginTop: 20,
        borderBottomWidth: 4,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1,
    },

    button: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    gradientButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 108,
        height: 42,
        backgroundColor: '#4D8D72',
        borderRadius: 15,
    },

    link: {
        textDecorationLine: 'underline',
        color: 'white',
        // paddingTop: 30,
        fontSize: 15,
    },

    forgotPass: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red',
        // marginLeft: 200,
        marginRight: 10,
        // paddingTop: 30,
    },

    idk: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // paddingTop: 20,
        // height: 80,
        // backgroundColor: 'black'
    },

    rememberMe: {
        // paddingTop: 30,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'black',
        marginLeft: 10,
    },

    rememberMeText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5,
    },

});