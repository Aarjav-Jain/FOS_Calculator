import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Card({textHeading, navigateTo}) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeading}>
          <Text style={{fontSize: 23}}>{textHeading}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={{color: 'black', fontSize: 18}}>
            {'lksndlkfnaskldnnklsandkfnsaldknlkdsnklnsdlknkln'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // borderWidth: 2,
    // borderColor: 'grey',
    // borderRadius: 15,
    width: 280,
    marginVertical: 10,
  },
  cardHeading: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // borderColor: 'yellow',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardBody: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 0,
    backgroundColor: 'white',
    borderColor: 'grey',
    height: 200,
  },
});
