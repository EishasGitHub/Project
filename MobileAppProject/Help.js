import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Header from '../components/header';
import Header1 from '../components/headerChats';
import HeaderHelp from '../components/headerHelp';

export default function HelpScreen({ navigation }) {

    return (
        <View>

            <HeaderHelp navigation={navigation}/>

            <View style={styles.Main}>

                <Text style={styles.Heading}>FAQs</Text>

                <ScrollView>

                    <Text style={styles.question}> Q1.How do I reset my password ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q2.How to scan ID cards ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />


                    <Text style={styles.question}> Q3.Why is ID card not being scanned ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q4.Why is Student Roll no not being found ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q5.What should i do if the app crashes ? ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q6.Why does my app keeps crashing ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q7.Does the app track my personal information ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                    <Text style={styles.question}> Q8.Why does app need location information ?</Text>
                    <Text style={styles.answer}>To reset your password, Logout of your account and click the 'Forgot my Password'</Text>
                    <View style={styles.separator} />

                </ScrollView>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({

    Heading: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#3F6F5B'
    },

    infobox: {
        // justifyContent: 'center'
        alignContent: 'center'
    },

    Main: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    question: {
        fontWeight: 'bold',
        fontSize: 20,

        marginTop: 15,
        color: '#4D8D72'

    },

    answer: {
        fontSize: 15,
    },

    separator: {
        borderLeftColor: 'black',
        borderLeftWidth: StyleSheet.hairlineWidth,
        width: '100%'
    },
})