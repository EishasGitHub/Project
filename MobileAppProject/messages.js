import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function MessageIcon() {

    return (

        <View style={styles.messagebox}>
                <Feather name='menu' size={40} color='#fff' />
            
        </View>

    );
}

const styles = StyleSheet.create({

    Page: {
        // flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',

    },

    messagebox: {

        width: 75,
        height: 83,
        backgroundColor: '#4D8D72',

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,

        borderWidth: 4,

        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
    },


})