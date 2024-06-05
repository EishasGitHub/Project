import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/header';
import students from '../components/students';
import { violations, removeViolation } from '../components/violationRecords';


export default function ViewViolation({ navigation }) {

    const rollno = navigation.getParam('Rollno');

    const student = students.find(student => student.Rollno === rollno);

    const studentName = student.Name;
    const studentRoll = student.Rollno;

    const filteredViolations = violations.filter(v => v.Rollno === rollno);

    const [ref, setRef] = useState(0)

    if (filteredViolations == undefined) {

        filteredViolations = 'No Violations Recorded yet'
    }

    const addViolation = () => {
        navigation.navigate('AddViolation_Page', student);
    };

    const deleteViolation = (id) => {
        removeViolation(id);
        console.log({id});
        navigation.navigate('ViewViolations_Page', student)
    };

    const confirmDelete = (id) => {

        Alert.alert(
            'Confirm Delete',
            'Do you want to delete this record?',
            [
                {
                    text: 'Confirm',
                    onPress: () => deleteViolation(id),

                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('User cancelled')
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <>
            <View style={styles.page}>
                <Header navigation={navigation} />
                <View style={styles.container}>

                    <View style={styles.main}>
                        <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradientMain}>
                            <View style={styles.heading}>
                                <Text style={styles.headingText}>Violation History</Text>
                            </View>
                            <View style={styles.studentDetails}>
                                <View style={styles.student}>
                                    <Text style={styles.studentInfo}>Name: </Text>
                                    <Text style={styles.studentDetail}> {studentName}</Text>
                                </View>

                                <View style={styles.student}>
                                    <Text style={styles.studentInfo}>Roll no: </Text>
                                    <Text style={styles.studentDetail}>{studentRoll}</Text>
                                </View>
                            </View>
                            <View style={styles.violationsHeader}>
                                <LinearGradient colors={["#0009", "#4D8D72"]} style={styles.gradientHeader}>
                                    <Text style={styles.violationHeading}>Violation Detail</Text>
                                    <Text style={styles.violationHeading}>Fine</Text>
                                    <Text style={styles.violationHeading}>Date</Text>
                                    <Text style={styles.violationHeading}>Time</Text>
                                </LinearGradient>
                            </View>

                            <View style={{ minHeight: 40, maxHeight: 270 }}>
                                <ScrollView style={styles.violationBox}>
                                    {filteredViolations.map((element, violationID) => (
                                        <TouchableOpacity onPress={() => confirmDelete(element.violationID)}>
                                            <View style={styles.violations}>

                                                <Text key={violationID} style={styles.viol}>{element.Detail}</Text>
                                                <View style={styles.violationSeparator} />

                                                <Text style={styles.viol}>{element.Fine}</Text>
                                                <View style={styles.violationSeparator} />

                                                <Text style={styles.viol}>{element.Date}</Text>
                                                <View style={styles.violationSeparator} />

                                                <Text style={styles.viol}>{element.Time}</Text>

                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        </LinearGradient>
                    </View>

                </View >
            </View >

            <View style={styles.addViolation}>
                <Entypo name='chevron-up' size={30} />
                <TouchableOpacity onPress={addViolation}>
                    <Text style={styles.addViolationText}>Add Violation</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        width: 330,
        backgroundColor: '#4D8D72',
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        height: '90%',
    },

    gradientMain: {
        width: 330,
        borderRadius: 20,
        alignItems: 'center',
        height: '100%',
    },

    heading: {
        marginTop: 10,
    },
    headingText: {
        fontSize: 30,
        color: 'white',
    },
    studentDetails: {
        marginTop: 13,

    },
    student: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
    },
    studentInfo: {
        fontSize: 16,
        color: 'white',
        textAlign: 'right',
    },
    separator: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 200,
        marginTop: 25,
        marginLeft: 10,
    },
    violationsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#3F6F5B',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 300,
        height: 60,
        marginTop: 25,
    },
    gradientHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 300,
        height: 80,
    },

    violationHeading: {
        color: 'white',
        fontSize: 12,
        width: 50,
        height: 30,
        textAlign: 'center',
    },
    violationBox: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 300,
        // height: '100%',
        // maxHeight: 280,
        // minHeight: 50,
    },

    violations: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    viol: {
        width: 60,
        textAlign: 'center',
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
    },

    violationSeparator: {
        borderLeftColor: 'black',
        borderLeftWidth: StyleSheet.hairlineWidth,
        height: '100%',
        // marginTop: 18,
        // marginBottom: 18
    },
    warnings: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
    },
    addViolation: {
        width: '100%',
        height: 100,
        backgroundColor: '#91B8A8',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    addViolationText: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: '600',
    },

    studentDetail: {
        fontSize: 20,
        color: 'white',
        // fontWeight: 'bold',
    },
});
