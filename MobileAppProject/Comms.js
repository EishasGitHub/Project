import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat, renderBubble, Bubble, Send } from 'react-native-gifted-chat';
import { auth, db } from '../firebase';
import { IconButton } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

import Header1 from '../components/headerChats';

export default function Chat({ navigation }) {

    const [messages, setMessages] = useState([]);
    // const signOutNow = () => {
    //     signOut(auth)
    //         .then(() => navigation.replace('Login'))
    //         .catch((error) => console.error(error));
    // };

    useLayoutEffect(() => {
        // navigation.setOptions({
        //     headerLeft: () => (
        //         <View style={{ marginLeft: 20 }}>
        //             <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        //         </View>
        //     ),
        //     headerRight: () => (
        //         <TouchableOpacity style={{ marginRight: 10 }} onPress={signOutNow}>
        //             <Text>Logout</Text>
        //         </TouchableOpacity>
        //     ),
        // });

        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) =>
            setMessages(
                snapshot.docs.map((doc) => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                }))
            )
        );

        return unsubscribe;
    }, [navigation]);

    function renderSend(props) {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    {/* <IconButton icon='send-circle' size={40} color='#4D8D72' /> */}
                    <Ionicons name='send' size={40} color='#4D8D72' />
                </View>
            </Send>
        );
    }

    function scrollToBottomComponent() {
        return (
            <View>
                <IconButton icon='chevron-double-down' size={100} color='#6646ee' />
            </View>
        );
    }

    function renderLoading() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='white' />
            </View>
        );
    }

    function renderBubble(props) {
        return (
            // Step 3: return the component
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: '#4D8D72'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        );
    }

    function input(props) {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
            </View>
        );
    };

    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
    }, []);

    return (
        <View style={{ height: '100%', backgroundColor: '#15271F' }}>

            <Header1 navigation={navigation} />
            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage
                renderUsernameOnMessage={true}
                onSend={(messages) => onSend(messages)}
                user={{ _id: auth?.currentUser?.email, name: auth?.currentUser?.displayName }}
                renderBubble={renderBubble}
                placeholder='Type your message here...'
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                renderLoading={renderLoading}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 50,
        width: 50,
        height: 45,
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainer: {
        flexDirection: 'row',
        // justifyContent: 'center'
        alignItems: 'center'
    },

    input: {
        backgroundColor: '#DCDCDC',
        borderRadius: 50,
        width: '85%',
        height: 40,
        fontSize: 20,

        justifyContent: 'center',
        alignItems: 'center'
    }
});