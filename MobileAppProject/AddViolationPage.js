import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput ,Alert} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign } from '@expo/vector-icons';
import {getCurrentPositionAsync , useForegroundPermissions, reverseGeocodeAsync} from "expo-location";
import * as Location from 'expo-location';
import { PermissionStatus } from 'expo-location';
import Header from "../components/header";
import students from "../components/students";
import { addViolation } from '../components/violationRecords';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore database
import { Linking } from 'react-native';
import firebase from '../firebase';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, push, serverTimestamp } from 'firebase/database'; // Corrected import

export default function AddViolation({ navigation }) {

    const [locationPermissionInformation , requestPermission] = useForegroundPermissions();

    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!','You need to give Location access');
            return false;
        }
        return true;
    }

    // useEffect(() => {
    //     const verifyPermissions = async () => {
    //       const { status } = await requestPermission();
    //       setHasPermission(status === "granted");
    //     };
    
    //     verifyPermissions();
    //   }, []);

    const rollno = navigation.getParam('Rollno');

    const student = students.find(student => student.Rollno === rollno);


    const Discard = () => {
        navigation.goBack();
    }

    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var yearSuffix = year.toString().slice(-2);
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    var [newViolation, setNewViolation] = useState({
        Rollno: navigation.getParam('Rollno'),
        Detail: '',
        Fine: '',
        Date: '',
        Time: ''
    });

    const [selectedVD, setSelectedVD] = useState("");
    const [selectedFine, setSelectedFine] = useState("");

    const VDdata = [
        { key: '1', value: 'Smoking' },
        { key: '2', value: 'Sexual Abuse' },
        { key: '3', value: 'Theft' },
        { key: '4', value: 'Damage' },
        { key: '5', value: 'No ID Card' },
        { key: '6', value: 'Litter' },
        { key: '7', value: 'Swear Words' },
    ];

    const Finedata = [
        { key: '1', value: '10000' },
        { key: '2', value: '2000' },
        { key: '3', value: '1000' },
        { key: '4', value: '500' },
        { key: '5', value: '4000' },
        { key: '6', value: '7000' },
        { key: '7', value: '100' },
    ];

    var currentDate = `${date}/${month}/${yearSuffix}`
    var currentTime = `${hours}:${min}`
    var [detail, setDetail] = useState();
    var [fine, setFine] = useState();

    const Confirm = () => {
        getLocation();

        newViolation.Detail = selectedVD;
        newViolation.Fine = selectedFine;
        newViolation.Date = currentDate;
        newViolation.Time = currentTime;

        if (newViolation.Detail == '') {

            Alert.alert('Error:', 'No Detail Selected')
        }
        else if (newViolation.Fine == '') {
            Alert.alert('Error:', 'No Fine Selected')
        }

        else {

            // add the currentlly given values
            addViolation(newViolation);

            // clear the violation data again for adding again
            setNewViolation({ Rollno: '', Detail: '', Fine: '', Date: '', Time: '' });

            navigation.navigate('ViewViolations_Page', student);
        }
    }

    const [location, setLocation] = useState(null);
    const [locationLog, setLocationLog] = useState('');
    const auth = getAuth(firebase);
    const database = getDatabase(firebase);

    const getLocation = async () => {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }
        const currentLocation = await getCurrentPositionAsync();
        setLocation(currentLocation);
        // console.log(currentLocation);
        // Uncomment the following line if you intend to use reverseAddress
        // reverseAddress(currentLocation);
        handleLocationLog(currentLocation);
    };

    const reverseAddress = async (currentLocation) => {
        const reverseGeocodeAddress = await reverseGeocodeAsync({
            longitude: currentLocation.coords.longitude,
            latitude: currentLocation.coords.latitude
        });

        if (reverseGeocodeAddress.length > 0) {
            const { formattedAddress } = reverseGeocodeAddress[0];
            Alert.alert('New Violation Added from', formattedAddress);
        } else {
            Alert.alert('No address found for the current location');
        }
    };

    const handleLocationLog = async (currentLocation) => {
        const reverseGeocodeAddress = await reverseGeocodeAsync({
            longitude: currentLocation.coords.longitude,
            latitude: currentLocation.coords.latitude
        });

        if (reverseGeocodeAddress.length > 0) {
            const { formattedAddress } = reverseGeocodeAddress[0];
            try {
                const locationRef = ref(database, 'LocationLogs');
                await push(locationRef, {
                    message: formattedAddress,
                    userId: auth.currentUser ? auth.currentUser.uid : null,
                    timestamp: new Date().toISOString(),
                });
                
                // Alert.alert('Location recorded Successfully',formattedAddress);
                Alert.alert(
                    'New Violation Added from',
                    formattedAddress,
                    [
                        {
                            text: 'View on Map',
                            onPress: () => openMaps(formattedAddress),
                        },
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                    ]
                );
                setLocationLog('');
            } catch (error) {
                Alert.alert('Error storing Location in the database. Please try again.', error.message);
                console.error(error);
            }
        } else {
            Alert.alert('No address found for the current location');
        }
    };

    const openMaps = (location) => {
        // Check if the address is available
        if (location) {
          // Format the address for the maps URL
          const formattedAddress = encodeURIComponent(location);
          // Open the maps app with the formatted address
          Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${formattedAddress}`);
        }
      };

    return (
        <View style={styles.mainContainer}>
            <Header navigation={navigation} />

            <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}>

                <View style={styles.container}>


                    <Text style={styles.Heading}>Add Violation:</Text>

                    <View style={styles.initialDetail}>
                        <View style={styles.info}>
                            <Text style={styles.subheading}>Name:</Text>
                            <Text style={styles.detail}>{navigation.getParam("Name")}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.subheading}>Roll No:</Text>
                            <Text style={styles.detail}>{navigation.getParam("Rollno")}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.subheading}>Year of Enrollment:</Text>
                            <Text style={styles.detail}>{navigation.getParam("Enrolled")}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.subheading}>Date:</Text>
                            <Text style={styles.detail}>{currentDate}</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.subheading}>Time:</Text>
                            <Text style={styles.detail}>{currentTime}</Text>
                        </View>


                    </View>

                    <Text style={styles.optionHeading}>Violation Detail:</Text>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelectedVD(val)}
                            data={VDdata}
                            save="value"
                            boxStyles={{ backgroundColor: '#4D8D72', borderColor: 'white' }}
                            inputStyles={{ color: 'white' }}
                            dropdownStyles={{ backgroundColor: '#4D8D72', borderColor: 'white' }}
                            dropdownTextStyles={{ color: 'white', borderColor: 'white', borderWidth: 1, borderRadius: 10, marginBottom: 10, textAlign: 'center', fontSize: 15, backgroundColor: '#213C30', padding: 5 }}
                            placeholder="Select Violation"
                            searchPlaceholder="Search Violation"
                            arrowicon={<AntDesign name="caretdown" color={'#fff'} size={10} style={styles.icons} />}
                            closeicon={<AntDesign name="close" color={'#fff'} size={15} style={styles.icons} />}
                            searchicon={<AntDesign name="search1" color={'#fff'} size={15} style={styles.icons} />}
                        />
                    </View>

                    <Text style={styles.optionHeading}>Fine:</Text>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelectedFine(val)}
                            data={Finedata}
                            save="value"
                            boxStyles={{ backgroundColor: '#4D8D72', borderColor: 'white' }}
                            inputStyles={{ color: 'white' }}
                            dropdownStyles={{ backgroundColor: '#4D8D72', borderColor: 'white' }}
                            dropdownTextStyles={{ color: 'white', borderColor: 'white', borderWidth: 1, borderRadius: 10, marginBottom: 10, textAlign: 'center', fontSize: 15, backgroundColor: '#213C30', padding: 5 }}
                            placeholder="Select Fine"
                            searchPlaceholder="Search Fine"
                            arrowicon={<AntDesign name="caretdown" color={'#fff'} size={10} style={styles.icons} />}
                            closeicon={<AntDesign name="close" color={'#fff'} size={15} style={styles.icons} />}
                            searchicon={<AntDesign name="search1" color={'#fff'} size={15} style={styles.icons} />}
                        />

                    </View>

                    {/* <Text style={styles.optionHeading}>Violation Detail:</Text>
                    <View >

                        <TouchableOpacity>

                        <LinearGradient colors={["#fff", "#4D8D72", "#fff"]} style={styles.dropDown}>
                            <TextInput value={detail} onChangeText={txt => setDetail(txt)} />
                            <AntDesign name="caretdown" color={'#000'} size={18} style={styles.icons} />
                        </LinearGradient>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.optionHeading}>Fine:</Text>
                    <View>
                        <TouchableOpacity>
                        <LinearGradient colors={["#fff", "#4D8D72", "#fff"]} style={styles.dropDown}>
                            <TextInput value={fine} onChangeText={txt => setFine(txt)} />
                            <AntDesign name="caretdown" color={'#000'} size={18} style={styles.icons} />
                        </LinearGradient>
                        </TouchableOpacity>

                    </View> */}

                    <View style={{ marginTop: 50, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.confirmButton} onPress={Confirm}>
                            <LinearGradient colors={["#3F6F5B", "#79D5AF"]} style={styles.gradientButton}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.discardButton} onPress={Discard}>
                            <LinearGradient colors={["#3F6F5B", "#79D5AF"]} style={styles.gradientButton}>
                                <Text style={styles.buttonText}>Discard</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        // backgroundColor:'red', 
        alignItems: 'center',
        height: '100%',
        borderRadius: 20
    },

    container: {
        // backgroundColor: '#4D8D72',
        width: 330,
        height: '85%',
        borderRadius: 20,
        padding: 40,
        marginVertical: 10,
    },

    Heading: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    initialDetail: {
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    detail: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
        marginLeft: 15,
    },

    subheading: {
        fontSize: 16,
        marginTop: 10,
        color: 'white'
    },

    optionHeading: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20,
        color: 'white'
    },

    dropDown: {
        borderRadius: 10,
        width: 250,
        height: 30,
        justifyContent: 'center'
    },
    gradient: {
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: 10
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',

    },

    confirmButton: {
        borderRadius: 10,
        width: 150,
        height: 33,
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#3F6F5B',
        marginTop: 20
    },
    gradientButton: {
        borderRadius: 10,
        width: 150,
        height: 33,
        justifyContent: 'center',
    },

    discardButton: {
        borderRadius: 10,
        width: 150,
        height: 33,
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#3F6F5B',
        // marginTop: 20
    },

    icons: {
        textAlign: 'right',
        padding: 5
    }

});