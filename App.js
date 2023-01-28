import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DumpClassification from './screens/dump-classification/dump-classification';
import Home from './screens/home/home';
import RiskChart from './screens/risk-chart/risk-chart';
import MachineLearning from './screens/machine-learning/machine-learning';

export default function () {
  return (
    <View style={styles.container}>
      <Home />
      {/* <DumpClassification />
      <MachineLearning />
      <RiskChart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
