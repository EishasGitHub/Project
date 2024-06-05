import React, { useState } from 'react';
import { View, TextInput, Button, Alert , StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';
import firebase from '../firebase';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, push, serverTimestamp } from 'firebase/database'; // Corrected import
import Header1 from '../components/headerChats';
import { LinearGradient } from 'expo-linear-gradient';

const ReportBugScreen = ({navigation}) => {
  const [bugMessage, setBugMessage] = useState('');
  const auth = getAuth(firebase);
  const database = getDatabase(firebase);

  const handleReportBug = async () => {
    try {
      const bugRef = ref(database, 'bugReports'); // Corrected reference
      await push(bugRef, {
        message: bugMessage,
        userId: auth.currentUser ? auth.currentUser.uid : null,
        timestamp: serverTimestamp(), // Corrected server timestamp
      });
      
      Alert.alert('Bug reported successfully!');
      setBugMessage('');
    } catch (error) {
      Alert.alert('Error reporting bug. Please try again.', error.message); // Display Firebase error message
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation}/>
    <View style={{alignItems:'center' , marginTop: '60%'}}>
        <TextInput style={styles.input}
          placeholder="Describe the bug..."
          placeholderTextColor={'black'}
          value={bugMessage}
          onChangeText={text => setBugMessage(text)}
          multiline={true}
          textAlignVertical='top'
        />
    </View>
    <View>
      <TouchableOpacity style={styles.button} onPress={handleReportBug}>
      <LinearGradient colors={["#4D8D72", "#15271F"]} style={styles.gradient}>
        <Text style={{color: 'white' , textAlign: 'center'}}>Report Bug</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#4D8D72',
      height: '100%',
    },
    input: {
      width: '90%',
      marginBottom: 10,
      padding: 10,
      borderColor: '#ccc',
      borderRadius: 5,
      borderWidth: 5,
      height: 200, 
      // backgroundColor: '#4D8D72',
    },
    button: {
      // backgroundColor: '#4D8D72',
      padding: 10,
      borderRadius: 5,
    },
    gradient: {
      padding: 15,
      borderRadius: 20,
    },
  });

export default ReportBugScreen;
