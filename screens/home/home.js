import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../src/UI/card';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <Card
          textHeading="Dump Classification"
          navigateTo="Dump Classification"
        />
        <Card textHeading="Machine Learning" navigateTo="Machine Learning" />
        <Card textHeading="Safety Chart" navigateTo="Safety Chart" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
});
