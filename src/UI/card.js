import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, verticalScale, moderateScale} from '../utils/metrics';

export default function Card({textHeading, navigateTo, description}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeading}>
          <Text style={{fontSize: moderateScale(24)}}>{textHeading}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text
            style={{
              fontSize: moderateScale(24),
              color: 'black',
              fontWeight: 'bold',
            }}>
            {textHeading}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: moderateScale(18),
              paddingVertical: verticalScale(10),
            }}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // borderWidth: 2,
    // borderColor: 'grey',
    // borderRadius: 15,
    width: horizontalScale(300),
    marginVertical: verticalScale(15),
  },
  cardHeading: {
    paddingVertical: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  cardBody: {
    paddingVertical: verticalScale(25),
    paddingHorizontal: horizontalScale(25),
    borderWidth: horizontalScale(1),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    borderTopWidth: 0,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
});
