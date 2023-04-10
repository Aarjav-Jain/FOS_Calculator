import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

export default function SCLegend() {
  return (
    <ScrollView>
      {/* <ScrollView horizontal={true}>
        <Image
          source={require('../../src/assets/diagram.png')}
          //   style={{marginLeft: 10}}
        />
      </ScrollView> */}
      <View style={{marginLeft: 10}}>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>A1</Text>= Slope angle of the bench
          between coal-rib roof and dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>H1</Text> = Height of the bench
          between coal-rib roof and dragline sitting level
        </Text>
        <Text style={styles.customText}>
          <Text style={{fontWeight: 'bold'}}>CR-Height</Text> = Coal-rib height
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  customText: {color: 'black', fontSize: 18, marginBottom: 4},
});
