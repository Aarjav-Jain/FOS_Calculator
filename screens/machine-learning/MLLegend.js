import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

export default function MLLegend() {
  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <Image
          source={require('../../src/assets/diagram.png')}
          //   style={{marginLeft: 10}}
        />
      </ScrollView>
      <View
        style={{marginLeft: 10, borderTopColor: 'black', borderTopWidth: 2}}>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>A1</Text>= Slope angle of the bench
          between coal-rib roof and dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>H1</Text> = Height of the bench
          between coal-rib roof and dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>A2</Text> = Angle of the face of
          bench at dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>H2</Text> = Height of the bench at
          dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>CR-Height</Text> = Coal-rib height
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>CR-Width</Text> = Coal-rib width
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>BW1</Text> = Berm width at coal-rib
          roof level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>BW2</Text> = Berm width at dragline
          sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>Dip</Text> = Dipping of the seam
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  customText: {color: 'black', fontSize: 18, marginBottom: 4},
});
