import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button ,TouchableOpacity} from "react-native";
import { Camera,CameraView} from "expo-camera";
import { AntDesign, FontAwesome6, Feather, EvilIcons } from '@expo/vector-icons';
import students from "../components/students";

export default function ScanID({navigation}) {
  const [facing, setFacing] = useState('back');
  const [flashIcon, setflashIcon] = useState('zap-off');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanEnabled, setScanEnabled] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

    const handleBack = () => {
        navigation.goBack();
    }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const toggleFlash = () => {
    setflashIcon(prevFlashIcon => (prevFlashIcon === 'zap-off' ? 'zap' : 'zap-off'));
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const rollnum = extractNumber(data);
    const student = students.find(student => student.Rollno === rollnum);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // alert(`roll number: ${rollnum}`);

    if (student !== undefined) {
        navigation.navigate('ViewViolations_Page', student);
      } 

    else {
        navigation.navigate('EnterManuallyFailure_Page', { rollnum });
      }
  };

  const extractNumber = (rollnumber) => {
    const match = rollnumber.match(/(\d{9})/);
  
    // Check if a match is found and return the extracted number, or null if not found
    return match ? match[1] : null;
  };

  const enableScan = () => {
    setScanEnabled(true);
  };

  const disableScan = () => {
    setScanEnabled(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.Page}>

        <View style={styles.Header}>
            <View style={styles.settings}>
                <AntDesign name='arrowleft' size={46} color='white' onPress={handleBack}/>
            </View>
        </View>

      <CameraView style={styles.cameraView} facing={facing}
        onBarcodeScanned={scanEnabled && !scanned ? handleBarCodeScanned : undefined}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
      />
      {/* {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}

            <View style={styles.bottom}>
                <View style={styles.iconBox}>
                    <TouchableOpacity onPress={toggleFlash}>
                        <Feather name={flashIcon} size={40}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.elipse1}>
                    <TouchableOpacity onPress={enableScan}>
                        <AntDesign name='search1' size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  Page: {
      height:'100%',
      flex: 1,
      justifyContent: 'center',
    },

  Header: {
      width: '100%',
      height: 100,
      backgroundColor: '#4D8D72'
  },

  settings: {
      marginTop: 40,
      marginLeft: 15,
  },

  cameraView: {
      height: '70%',
      width: '100%',
      backgroundColor: 'black',
  },

  bottom: {
      flexDirection: 'row',
      backgroundColor: '#4D8D72',
      height: '20%',
    //   justifyContent: 'flex-start',
      width: '100%',
      
  },

  iconBox: {

      width: 60,
      height: 60,
      backgroundColor: '#DCDCDC',
      marginTop: 40,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 10,
      margin: 50
  },

  elipse1: {
      backgroundColor: 'lightgrey',
      width: 100,
      height: 100,
      borderRadius: 100,
      marginTop: 20,

      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
  },
})