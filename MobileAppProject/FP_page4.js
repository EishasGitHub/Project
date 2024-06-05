import React from "react";
import { ScrollView, View , Text ,StyleSheet, TouchableOpacity,Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from '@expo/vector-icons';
import StarImage from '../assets/Star.png';
import HeaderFP from "../components/headerFP";

export default function FP_Page_4({navigation}) {

    const pressHandlerFP4 = () =>{
        navigation.push('Login_Page');
      }
    return(
        <ScrollView style={styles.container}>
            <HeaderFP navigation={navigation}/>

            <Image source={StarImage} style={styles.backgroundImage}/>

            <Text style={styles.Heading}>PASSWORD UPDATED</Text>
            <Entypo name="emoji-flirt" size={200} color="#4D8D72" style={styles.icon}/>
            

            <View style={{marginTop: 180, alignItems: 'center'}}>
                <TouchableOpacity onPress={pressHandlerFP4}>
                    <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.loginButton} >
                    <Text style={styles.buttonText} >Back to Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    Heading: {
        fontSize: 32,
        color: '#4D8D72',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 120
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
    },

    loginButton: {
        borderRadius: 10,
        width: 333,
        height: 61,
        justifyContent: 'center'
        
    },

    icon: {
        marginTop: 60,
        textAlign: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '110%',
        height: '70%',
        bottom: 160,
    }

});