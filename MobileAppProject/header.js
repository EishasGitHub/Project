import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({navigation}) {
    const Settings = () =>{
        navigation.push('Settings_Page');
    }

    const Home = () =>{
        navigation.push('Home_Page');
    }

    return (
        <View style={styles.navbar}>
            <LinearGradient colors={["#4D8D72", "#15271F","#000"]} style={styles.gradient}
                start={{x:0 , y:0.5}}
                end={{x:2 , y:0.5}}
                locations={[0 , 0.4, 0.5]}>

            

            <View style={{bottom: 20}} >
                <TouchableOpacity style={styles.settings}>
                <FontAwesome name='gear' size={40} color='white' style={styles.settingsLogo} onPress={Settings}/>
                </TouchableOpacity>
            </View>

            <View>

                <Image source={require("../assets/FCCU(white).png")} style={styles.logo} />
                    <Text style={styles.brandname}>FCCU</Text>

            </View>

            <View style={{bottom:25}}>
                <TouchableOpacity style={styles.home}>
                    <Entypo name='home' size={46} color='#fff' onPress={Home}/>
                </TouchableOpacity>
            </View>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 70, 
        backgroundColor: '#4D8D72',
        // paddingTop: 35, 
    },

    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    settings: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10
    },

    settingsLogo: {
        width: 40,
        height: 40,
    },


    home: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        marginTop: 10
    },
});