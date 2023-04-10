import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function LegendSCNav() {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Safety Chart Legend Screen');
        }}>
        <Icon name="info-outline" size={35} color="black" />
      </Pressable>
    </View>
  );
}
