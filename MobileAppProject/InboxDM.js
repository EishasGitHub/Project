import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,FlatList } from 'react-native';
import Header1 from '../components/headerChats';
import { LinearGradient } from 'expo-linear-gradient';
import DM from './DM';

export default function InboxDM({navigation}) {
    const Groups = () =>{
        navigation.push('Inbox_GroupChats');
      }

    const Announcements = () =>{
        navigation.push('Announcements_Page');
      }

    const DM_Screen = () =>{
        navigation.push('Inbox_DM');
      }
  
    return (
  
        <View style={styles.Page}>

            <Header1 navigation={navigation}/>


            <View style={styles.categories}>
                <TouchableOpacity style={styles.DMButton} onPress={DM_Screen}>
                    <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradientDM}>
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
                    }}
                />

                <TouchableOpacity style={styles.AnnouncementsButton} onPress={Announcements}>
                <LinearGradient colors={["#3F6F5B", "#79D5AF"]} style={styles.gradientAnnouncements}>
                    <Text style={styles.category}>Announcements</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </View>

            <View style={styles.messages} >

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                        height: 60,
                        marginTop: 18,
                        // marginBottom: 18,
                    }}
                />

            </View>
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

        backgroundColor: '#3F6F5B',
        width: '33%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomLeftRadius: 20,

        borderBottomWidth: 4,
        borderTopWidth: 2,
        borderLeftWidth: 2,
    },

    gradientDM: {
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

        borderBottomWidth: 2,
        borderTopWidth: 2,
    },

    gradientGroup:{
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
        backgroundColor: '#4D8D72',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 2,
        borderTopWidth: 2,

        borderBottomRightRadius: 20,
    },
    gradientAnnouncements: {
        width: '100%',
        height: 60,
        backgroundColor: '#4D8D72',

        justifyContent: 'center',
        alignItems: 'center', 
        
        borderBottomRightRadius: 20,
    }

})