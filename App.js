import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';
import DumpClassification from './screens/dump-classification/dump-classification';
import Home from './screens/home/home';
import SafetyChart from './screens/safety-chart/safety-chart';
import MachineLearning from './screens/machine-learning/machine-learning';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DumpClassificationResult from './src/components/dump-classification/dump-classification-result';
// import SafetyChartResult from './src/components/safety-chart/safety-chart-result';
import Navbar from './src/UI/navbar';
import MLLegend from './screens/machine-learning/MLLegend';
import LegendMLNav from './src/UI/legendMLNav';
import LegendSCNav from './src/UI/legendSafetyChartNav';
import SCLegend from './screens/safety-chart/SCLegend';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: () => <Navbar />, headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Dump Classification"
          component={DumpClassification}
          options={{
            headerRight: () => <LegendMLNav />,
          }}
        />
        <Stack.Screen
          name="Machine Learning"
          component={MachineLearning}
          options={{
            headerRight: () => <LegendMLNav />,
          }}
        />
        <Stack.Screen
          name="Safety Chart"
          component={SafetyChart}
          options={{
            headerRight: () => <LegendSCNav />,
          }}
        />
        {/* <Stack.Screen
          name="Dump Classification Result"
          component={DumpClassificationResult}
        />
        <Stack.Screen
          name="Safety Chart Result"
          component={SafetyChartResult}
        /> */}
        <Stack.Screen name="ML Legend Screen" component={MLLegend} />
        <Stack.Screen name="Safety Chart Legend Screen" component={SCLegend} />
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
