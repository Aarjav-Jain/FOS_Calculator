import {useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Button from '../../UI/button';
import CustomTextInput from '../../UI/textinput';

export default function CustomForm({
  btnText,
  state,
  initialKeys,
  handleClick,
  dispatch,
  placeholderTextColor = 'black',
  keyboardType = 'numeric',
  inputMode = 'decimal',
}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textInput}>
        {initialKeys.map((item, index) => {
          return (
            <CustomTextInput
              key={index}
              placeholder={`Enter ${item}`}
              placeholderTextColor={placeholderTextColor}
              value={state[item]}
              onChangeText={e => dispatch({type: `changed_${item}`, value: e})}
              keyboardType={keyboardType}
              inputMode={inputMode}
            />
          );
        })}
      </View>
      <Button text={btnText} handlePress={handleClick} />
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
});
