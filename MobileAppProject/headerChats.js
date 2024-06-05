import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header1({navigation}) {
    const Back = () =>{
        navigation.goBack();
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


            <View style={{bottom:20}}>
                <TouchableOpacity style={styles.back} onPress={Back}>
                    <AntDesign name='arrowleft' size={40} color='white' style={styles.arrow}/>
                </TouchableOpacity>
            </View>

            <View>

                <Image source={require("../assets/FCCU(white).png")} style={styles.logo} />
                    <Text style={styles.brandname}>FCCU</Text>

            </View>

            <View style={{bottom:25}}>
                <TouchableOpacity style={styles.home} onPress={Home}>
                    <Entypo name='home' size={46} color='white' />
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

    back: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 10
    },

    arrow: {
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