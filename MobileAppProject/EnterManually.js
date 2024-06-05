import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/header';
import { Feather } from '@expo/vector-icons';
import MessageIcon from '../components/messages';
import students from '../components/students';

export default function EnterManually({ navigation }) {

    const ViewViolations = () => {
        navigation.push('ViewViolations_Page');
    };
    const Chat = () => {
        navigation.push('Chat_Screen');
    };

    const [rollno, setRollno] = useState('')
    const student = students.find(student => student.Rollno === rollno);

    const handleNextPage = () => {

        if (student != undefined) {
            navigation.navigate('ViewViolations_Page', student)
        }

        else {
            navigation.navigate('EnterManuallyFailure_Page', { rollno })
        }

    };

    return (

        <View style={styles.Page}>

            <Header navigation={navigation} />

            <View style={styles.Main}>
                <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradientMain}>
                    <Text style={styles.text}>Enter Roll #:</Text>
                    <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setRollno(text)} value={rollno} />
                </LinearGradient>
            </View>

            <TouchableOpacity style={styles.searchbutton} onPress={handleNextPage}>
                <LinearGradient colors={["#4D8D72", "#15271F", "#000"]} style={styles.gradientSearch}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 2, y: 0.5 }}
                    locations={[0, 0.4, 0.5]}>

                    <Feather name='search' size={18} color='#fff' />
                    <Text style={styles.search}>SEARCH</Text>

                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.messageIcon}>
                <TouchableOpacity onPress={Chat}>
                    <MessageIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    Page: {

        alignItems: 'center',
        // backgroundColor: 'red',
        height: '100%'

    },

    Main: {
        width: 314,
        height: 144,
        backgroundColor: '#4D8D72',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 200,

        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1,
    },
    gradientMain: {
        width: 314,
        height: 144,
        backgroundColor: '#4D8D72',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },

    input: {
        height: 32,
        width: 199,
        margin: 12,
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'whitesmoke',
        borderRadius: 15,
        textAlign: 'center',
        // borderBottomWidth: 4,
        fontSize: 20,
    },

    searchbutton: {
        width: 150,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#4D8D72',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',

        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1,
    },

    search: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 10,
    },

    messageIcon: {
        // position: 'absolute',
        // bottom: 20,
        // right: 20,
        alignSelf: 'flex-end',
        padding: 30,
        marginTop: '60%'
        // marginTop: 'auto'
    },
    gradientSearch: {
        width: 150,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})