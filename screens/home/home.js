import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../src/UI/card';
import {getSafetyChartPrediction} from '../../src/utils/apis/modelApi';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSafetyChartPrediction([10, 25, 38]);
      } catch (e) {
        console.log('initial request on home page failed', e);
      }
    };
    fetchData();
  }, []);

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
          description="Classify your slope into Safe, Vulerable or Fail"
        />
        <Card
          textHeading="Machine Learning"
          navigateTo="Machine Learning"
          description="Predict the FOS using pre-build ML model"
        />
        <Card
          textHeading="Safety Chart"
          navigateTo="Safety Chart"
          description="Classify the slability of your slope by 3 parameters"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderTopWidth: 0.9,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
});
