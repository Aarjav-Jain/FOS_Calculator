import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          // flexWrap: 'nowrap',
          width: '60%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 35}}>Dump Slope Stability</Text>
      </View>
      <Image
        source={require('../assets/mining.png')}
        style={{width: 150, height: 150}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
});
