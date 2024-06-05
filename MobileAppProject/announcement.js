import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';


export default function Announcement() {

    return (
        <View style={styles.Main}>

            <View style={styles.Datebox}>
                <Text>11-05-2024</Text>
            </View>

            <View style={styles.announcementBox}>

                <View style={styles.text}>
                    <Text style={{
                        fontSize: 14,
                        color: 'white'
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.... More</Text>
                </View>

                <View style={styles.time}>
                    <Text style={{
                        fontSize: 14,
                        color: 'white'
                    }}>11:59am</Text>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    Main: {

        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',

        marginTop: 20,

    },

    Datebox: {
        justifyContent: 'center',
        width: 320,

    },

    announcementBox: {
        marginTop: 10,
        backgroundColor: '#4D8D72',
        width: 320,
        height: 90,

    },
    text: {
        padding: 5,
        color: 'white',
    },

    time: {
        alignItems: 'flex-end',
        marginRight: 10,
    },


})