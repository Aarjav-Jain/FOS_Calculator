import {useEffect, useRef, useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Button from '../../UI/button';
import CustomTextInput from '../../UI/textinput';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';

export default function CustomForm({
  btnText,
  state,
  values,
  handleClick,
  dispatch,
  result,
  placeholderTextColor = 'black',
  keyboardType = 'numeric',
  inputMode = 'decimal',
  setResult,
  resultText = 'Calculated FOS is:',
}) {
  const initialKeys = Object.keys(values);
  const [errObj, setErrObj] = useState({});
  const scrollRef = useRef();

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const declareErrorObj = () => {
    setResult(null);
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

  const validateInput = async () => {
    if (!declareErrorObj()) await handleClick();
  };

  useEffect(() => {
    result && scrollToTop();
  }, [result]);

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollRef}>
      {result && (
        <View style={styles.result}>
          <Text style={{color: 'black', fontSize: 20}}>
            {resultText} {result}
          </Text>
        </View>
      )}
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
      <Button
        text={btnText}
        handlePress={() => {
          validateInput();
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(50),
    alignItems: 'center',
  },
  result: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: moderateScale(3),
    borderColor: 'black',
    color: 'black',
    width: '80%',
    alignItems: 'center',
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMsg: {
    color: '#db3535',
    fontSize: moderateScale(16),
  },
});
