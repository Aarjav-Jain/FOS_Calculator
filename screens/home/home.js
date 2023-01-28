import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.card}>
        <Text>Dump Classification</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.card}>
        <Text>Machine Learning</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.card}>
        <Text>Risk Chart</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    backgroundColor: 'purple',
  },
});
