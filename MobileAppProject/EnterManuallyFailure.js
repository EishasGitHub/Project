import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/header';
import { AntDesign } from '@expo/vector-icons';

export default function EnterManuallyFailure({ navigation }) {

    const EnterManually = () => {
        navigation.pop()
    }

    const Home = () => {
        navigation.push('Home_Page')
    }

    return (

        <View style={styles.Page}>
            <Header navigation={navigation} />

            <View style={styles.Main}>

            <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}>

                <View style={styles.Error}>
                    <AntDesign name='exclamationcircleo' size={30} color='red' />
                    <Text style={styles.errortext}>Not Found</Text>
                </View>

                <View style={styles.studentDetails}>
                    <Text style={styles.studentName}>Roll Number: {navigation.getParam('rollno')}</Text>
                </View>

                <View style={styles.notFound}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        marginTop: 50,
                        // textDecorationLine: 'underline',
                    }}>No Student exists with this Roll Number</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={EnterManually}>
                        <Text style={styles.buttonText}>Try Again</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={Home}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </View>
                </LinearGradient>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    Page: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    Main: {
        width: 340,
        height: 360,
        backgroundColor: '#4D8D72',
        borderRadius: 50,
        marginTop: 140,
        // borderWidth: 4,
    },

    Error: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    errortext: {
        color: 'red',
        fontSize: 30,
        marginLeft: 10,
    },

    studentDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,

    },

    studentName: {
        fontSize: 20,
        color: 'white',
        textDecorationLine: 'underline',
    },

    notFound: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 35,
    },

    button: {
        width: 140,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center',

        borderBottomWidth: 4,
        borderLeftWidth: 4,
        borderRightWidth: 4,
    },

    buttonText: {
        fontSize: 16,


    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 340,
        height: 360,
        // backgroundColor: '#4D8D72',
        borderRadius: 50,
        // borderWidth: 4,
    }



})