import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale, moderateScale} from '../utils/metrics';

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
        <Text style={{color: 'black', fontSize: moderateScale(35)}}>
          Dump Slope Stability
        </Text>
      </View>
      <Image
        source={require('../assets/mining.png')}
        style={{width: horizontalScale(130), height: verticalScale(130)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
  },
});
