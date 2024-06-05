import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Header1 from '../components/headerChats';
import Announcement from '../components/announcement';
import { LinearGradient } from 'expo-linear-gradient';

export default function Announcements({navigation}) {
    const Groups = () =>{
        navigation.push('Inbox_GroupChats');
      }

    const DirectChat = () =>{
        navigation.push('Inbox_DM');
      }
    return (
        <View style={styles.Page}>

            <Header1 navigation={navigation}/>


            <View style={styles.categories}>

                <TouchableOpacity style={styles.DMButton} onPress={DirectChat}>
                <LinearGradient colors={["#3F6F5B", "#79D5AF"]} style={styles.gradientDM}>
                    <Text style={styles.category}>Direct Chat</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View
                    style={{
                        borderLeftColor: 'black',
                        borderLeftWidth: 3,
                        height: 60,
                        // marginTop: 18,
                        // marginBottom: 18,
                    }}
                />

                <TouchableOpacity style={styles.GroupButton} onPress={Groups}>
                <LinearGradient colors={["#3F6F5B", "#79D5AF"]} style={styles.gradientGroup}>
                    <Text style={styles.category}>Groups</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View
                    style={{
                        borderLeftColor: 'black',
                        borderLeftWidth: 2,
                        height: 60,
                        // marginTop: 18,
                        // marginBottom: 18,
                    }}
                />

                <TouchableOpacity style={styles.AnnouncementsButton}>
                <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradientAnnouncements}>
                    <Text style={styles.category}>Announcements</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </View>


            <Announcement />
            <Announcement />
            <Announcement />
            <Announcement />

        </View>
    );
}

const styles = StyleSheet.create({

    Page: {},

    categories: {
        // height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    DMButton: {

        backgroundColor: '#4D8D72',
        width: '33%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomLeftRadius: 20,

        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
    },

    gradientDM: {
        backgroundColor: '#4D8D72',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomLeftRadius: 20,
    },

    GroupButton: {
        width: '33%',
        height: 60,
        backgroundColor: '#4D8D72',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 4,
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    
    gradientGroup: {
        width: '100%',
        height: 60,
        backgroundColor: '#4D8D72',

        justifyContent: 'center',
        alignItems: 'center',
    },

    category: {
        color: 'white',
        fontSize: 15,
    },

    AnnouncementsButton: {
        width: '33%',
        height: 60,
        backgroundColor: '#3F6F5B',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,

        borderBottomRightRadius: 20,
    },

    gradientAnnouncements: {
        width: '100%',
        height: 60,
        backgroundColor: '#3F6F5B',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomRightRadius: 20,
    },

    annoucements: {
        alignItems: 'center',
    },

})