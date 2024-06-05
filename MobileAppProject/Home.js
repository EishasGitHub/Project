import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import Header from '../components/header';
import MessageIcon from '../components/messages';
import HeaderLogin from '../components/HeaderLogin';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const EnterManually = () => {
        navigation.push('EnterManually_Page');
    }

    const Chat = () => {
        navigation.navigate('Chat_Screen');
    }

    const OpenCamera = () => {
        navigation.push('ScanID_Page');
    }

    return (
        <View style={styles.Page}>

            <Header navigation={navigation} />

            <Text style={styles.Heading}>Student Violation Record Management</Text>


            <TouchableOpacity style={styles.buttonContainer} onPress={OpenCamera}>
                <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}>
                    <MaterialCommunityIcons name='line-scan' size={25} color='white' />
                    <Text style={styles.buttonText}>SCAN ID CARD</Text>
                    {/* <Text style={styles.buttonText}>CARD</Text> */}
                </LinearGradient>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonContainer} onPress={EnterManually}>
                <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}>

                    <MaterialCommunityIcons name='typewriter' size={25} color='white' />
                    <Text style={styles.buttonText}>ENTER MANUALLY</Text>
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
        textAlign: 'center',
        height: '100%'
    },

    Heading: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#4D8D72',
        padding: 30,
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 1,
    },

    buttonContainer: {
        flexDirection: 'row',
        width: 250,
        height: 70,
        backgroundColor: '#4D8D72',
        borderRadius: 30,
        borderStyle: 'solid',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        // borderBottomWidth: 10,

    },

    gradient: {
        flexDirection: 'row',
        width: 250,
        height: 70,
        borderRadius: 30,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginLeft: 15,

    },

    messageIcon: {
        // marginTop: 160,
        // marginLeft: 250,
        alignSelf: 'flex-end',
        marginTop: 'auto',
        padding: 15

    },

})