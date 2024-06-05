import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

import Header from '../components/header';
import Header1 from '../components/headerChats';
import { Feather } from '@expo/vector-icons';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { useState } from 'react';


export default function Settings({ navigation }) {

    const [tick, setTick] = useState('square-o')

    const Logout = () => {
        navigation.push('Login_Page');
    }

    const ReportBug = () => {
        navigation.push('ReportABug');
    }

    const Help = () => {
        navigation.push('Help_Screen')
    }

    // const Profile = () => {
    //     navigation.push('Profile_Screen')
    // }

    const NotifToggle = () => {

        if (tick == 'square-o') {
            setTick('check-square')
        }

        else {
            setTick('square-o')
        }
    }

    return (
        <View style={styles.Page}>

            <Header1 navigation={navigation} />

            <View style={styles.mainbar}>

                <View style={styles.list}>

                    {/* <View style={styles.optionBox}>
                        <Text style={styles.options}>Dark Mode</Text>
                        <Feather name='toggle-left' size={30} style={styles.icons} />
                    </View> */}

                    {/* 
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    /> */}

                    {/* <View style={styles.optionBox}>
                        <Text style={styles.options}>Language Preferences</Text>
                    </View> */}

                    {/* <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    /> */}

                    {/* <TouchableOpacity style={styles.optionBox} onPress={Profile}>
                        <Text style={styles.options}>My Profile</Text>
                        <Octicons name='feed-person' size={25} style={{ marginTop: 20, marginLeft: 120 }} color='#2B4E3F' />
                    </TouchableOpacity>


                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    /> */}


                    <View style={styles.optionBox}>
                        <Text style={styles.options}>Notifications</Text>
                        <FontAwesome name={tick} size={25} style={styles.icons} onPress={NotifToggle} color='#2B4E3F' />
                    </View>


                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    />

                    <View style={styles.optionBox}>
                        <TouchableOpacity onPress={Help}>
                            <Text style={styles.options}>Help</Text>
                        </TouchableOpacity>
                    </View>


                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    />

                    <View style={styles.optionBox}>
                        <TouchableOpacity onPress={ReportBug}>
                            <Text style={styles.options}>Report a bug</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 245,
                            marginTop: 18,
                            marginBottom: 18,
                        }}
                    />


                </View>

                <View style={styles.logout}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={Logout}>
                        <Feather name='log-out' size={30} />
                        <Text style={styles.logouttext}> Log out</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    Page: {
        backgroundColor: 'whitesmoke',
    },

    mainbar: {
        width: 274,
        height: '90%',
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderRightWidth: 3,
        paddingTop: 20,
        alignItems: 'center',
    },

    options: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20

    },

    logout: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 250,
        marginLeft: 30,
    },

    logouttext: {
        fontSize: 20,

    },

    optionBox: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    icons: {
        marginLeft: 100,
        marginTop: 20
    },
})