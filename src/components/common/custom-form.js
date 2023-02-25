import {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Button from '../../UI/button';
import CustomTextInput from '../../UI/textinput';

export default function CustomForm({
  btnText,
  state,
  values,
  handleClick,
  dispatch,
  placeholderTextColor = 'black',
  keyboardType = 'numeric',
  inputMode = 'decimal',
}) {
  const initialKeys = Object.keys(values);
  const [errObj, setErrObj] = useState({});

  const declareErrorObj = () => {
    const error = {};
    let hasError = false;
    // required && only numeric values allowed
    for (i of initialKeys) {
      error[i] = !state[i] || Number.isNaN(Number(state[i]));
      if (error[i]) hasError = true;
    }
    setErrObj({...error});
    return hasError;
  };

  const validateInput = () => {
    //FIXME: call handelClick
    if (!declareErrorObj()) handleClick();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textInput}>
        {initialKeys.map((item, index) => {
          return (
            <View key={index}>
              <CustomTextInput
                placeholder={`Enter ${item}`}
                placeholderTextColor={placeholderTextColor}
                value={state[item]}
                onChangeText={e =>
                  dispatch({type: `changed_${item}`, value: e})
                }
                keyboardType={keyboardType}
                inputMode={inputMode}
                hasError={errObj[item]}
              />
              {errObj[item] && (
                <Text style={styles.errorMsg}>
                  {Number.isNaN(Number(state[item]))
                    ? 'Please enter a number'
                    : 'This Field is Required'}
                </Text>
              )}
            </View>
          );
        })}
      </View>
      <Button text={btnText} handlePress={validateInput} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMsg: {
    color: '#db3535',
    fontSize: 16,
  },
});
