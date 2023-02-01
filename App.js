import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DumpClassification from './screens/dump-classification/dump-classification';
import Home from './screens/home/home';
import SafetyChart from './screens/safety-chart/safety-chart';
import MachineLearning from './screens/machine-learning/machine-learning';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DumpClassificationResult from './src/components/dump-classification/dump-classification-result';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Dump Classification"
          component={DumpClassification}
        />
        <Stack.Screen name="Machine Learning" component={MachineLearning} />
        <Stack.Screen name="Safety Chart" component={SafetyChart} />
        <Stack.Screen
          name="Dump Classification Result"
          component={DumpClassificationResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
// });
