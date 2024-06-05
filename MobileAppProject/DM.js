import React, { useEffect, useState } from "react";
import firebase from 'firebase/app'; 
import 'firebase/auth';
// import 'firebase/database';
import { Database , getDatabase } from "firebase/database";
import firebaseApp from "../firebase";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { getAuth} from 'firebase/auth';

export default function DM({ roomName }) {
    const [chatMessages, setChatMessages] = useState([]);
    let currentUser = null;
    const auth = getAuth(firebase);
    const [message, setMessage] = useState('');

    // Check if a user is signed in before accessing currentUser
    if (auth.currentUser) {
        currentUser = auth.currentUser;
    }

    useEffect(() => {
        // Function to fetch messages from Firebase and update state
        const fetchMessages = () => {
            getDatabase(firebase).ref('chatRooms/' + roomName + '/messages').on('value', (snapshot) => {
                const messages = snapshot.val();
                if (messages) {
                    const messageList = Object.values(messages);
                    setChatMessages(messageList);
                }
            });
        };

        // Send a message to a chat room
        const sendMessage = (message) => {
            getDatabase(firebase).ref('chatRooms/' + roomName + '/messages').push({
                text: message,
                sender: currentUser.uid,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            });
            setMessage('');
        };

        // Set user presence to online
        const setUserOnline = () => {
            const userStatusRef = getDatabase(firebase).ref('users/' + currentUser.uid);
            userStatusRef.set({ online: true });
            userStatusRef.onDisconnect().set({ online: false }); // Set user offline on disconnect
        };

        fetchMessages();
        setUserOnline();

        // Cleanup function to remove the listener when component unmounts
        return () => {
            getDatabase(firebase).ref('chatRooms/' + roomName + '/messages').off();
        };
    }, [roomName, currentUser]);

    // Component JSX
    return (
        <View style={s.Page}>
            <View style={s.Header}>
                <View style={s.settings}>
                    <AntDesign name='arrowleft' size={46} color='#4D8D72' />
                </View>
            </View>

            <View style={s.messageinput}>
                <View style={s.inputbox}>
                    <TextInput
                        placeholder='Message'
                        style={s.input}
                        multiline={true}
                        onChangeText={setMessage}
                    />
                </View>
                <View style={s.sendBox}>
                    <TouchableOpacity onPress={() => sendMessage(message)}>
                        <Ionicons name='send-sharp' size={30} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

s = StyleSheet.create({

    Page: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },

    Header: {
        width: '100%',
        height: 100,
        backgroundColor: 'white'
    },

    settings: {
        marginTop: 40,
        marginLeft: 15,
    },

    messageinput: {

        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'flex-end',

    },

    inputbox: {
        borderRadius: 50,
        width: '80%',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        borderRadius: 50,
        height: '90%',
        width: '80%',
        backgroundColor: 'whitesmoke',
        fontSize: 20,
        color: '#4D8D72'
        // textAlign: 'center'
    },

    sendBox: {
        height: '90%',
        width: '20%',
        backgroundColor: '#4D8D72',
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center'

    },
})