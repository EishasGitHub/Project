import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.navbar}></View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 40,
    backgroundColor: '#2B5242',
  },
});
