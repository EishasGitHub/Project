import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderLogin({navigation}) {

    const handleHelp =() => {
        navigation.push('Help_Screen');
    }
    
    return (
        <View style={styles.navbar}>
            <LinearGradient colors={["#4D8D72", "#15271F","#000"]} style={styles.gradient}
                start={{x:0 , y:0.5}}
                end={{x:2 , y:0.5}}
                locations={[0 , 0.4, 0.5]}>
            <View>
                <Image source={require("../assets/FCCU(white).png")} style={styles.logo} />
                <Text style={styles.brandname}>FCCU</Text>
            </View>
            <TouchableOpacity style={styles.help} onPress={handleHelp}>
                <Text style={styles.helpText}>Help</Text>
                <AntDesign name='questioncircleo' size={25} color='white' />
            </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70, 
        backgroundColor: '#4D8D72',
        // paddingTop: 35, 
    },

    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70, 
    },

    logo: {
        width: 40,
        height: 40,
    },

    brandname: {
        fontSize: 16,
        color: 'white',
    },

    help: {
        paddingTop: 25,
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
    },

    helpText: {
        color: 'white',
        fontSize: 16,
        marginRight: 5,
    },
});
