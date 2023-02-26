import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Card({textHeading, navigateTo, description}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeading}>
          <Text style={{fontSize: 24}}>{textHeading}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            {textHeading}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              paddingVertical: 10,
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
    width: 300,
    marginVertical: 15,
  },
  cardHeading: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardBody: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 0,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
});
