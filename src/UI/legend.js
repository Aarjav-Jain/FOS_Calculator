import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function Legend() {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Legend Screen');
        }}>
        <Icon name="info-outline" size={35} color="black" />
      </Pressable>
    </View>
  );
}
