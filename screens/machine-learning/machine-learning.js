import React, {useReducer, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
} from 'react-native';

export default function MachineLearning() {
  const initialValue = {
    A1: null,
    H1: null,
    A2: null,
    H2: null,
    BW1: null,
    BW2: null,
    CrH: null,
    CrBw: null,
    Dip: null,
    C: null,
    f: null,
  };

  const initialKeys = Object.keys(initialValue);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_H1': {
        return {...state, H1: action.value};
      }
      case 'changed_A1': {
        return {...state, A1: action.value};
      }
      case 'changed_H2': {
        return {...state, H2: action.value};
      }
      case 'changed_A2': {
        return {...state, A2: action.value};
      }
      case 'changed_BW1': {
        return {...state, BW1: action.value};
      }
      case 'changed_BW2': {
        return {...state, BW2: action.value};
      }
      case 'changed_CrH': {
        return {...state, CrH: action.value};
      }
      case 'changed_CrBw': {
        return {...state, CrBw: action.value};
      }
      case 'changed_Dip': {
        return {...state, Dip: action.value};
      }
      case 'changed_C': {
        return {...state, C: action.value};
      }
      case 'changed_f': {
        return {...state, f: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ScrollView>
      {initialKeys.map((item, index) => {
        return (
          <View key={index} style={styles.textBox}>
            <Text>Enter {item}: </Text>
            <TextInput
              placeholder={`Enter ${item}`}
              value={state[item]}
              onChangeText={e => dispatch({type: `changed_${item}`, value: e})}
              style={styles.textInput}
            />
          </View>
        );
      })}
      <Button color={'blue'} title="Calculate" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 3,
    width: '80%',
  },
});
