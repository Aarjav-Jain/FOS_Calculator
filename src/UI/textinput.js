import {StyleSheet, TextInput} from 'react-native';

export default function CustomTextInput({
  placeholder = '',
  placeholderTextColor = 'black',
  value,
  onChangeText,
  keyboardType,
  inputMode,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      style={styles.inputText}
      keyboardType={keyboardType}
      inputMode={inputMode}
    />
  );
}

const styles = StyleSheet.create({
  inputText: {
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
  },
});
