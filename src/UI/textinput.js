import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomTextInput({
  placeholder = '',
  placeholderTextColor = 'black',
  value,
  onChangeText,
  keyboardType,
  inputMode,
}) {
  return (
    <View style={styles.customInputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputText}
        keyboardType={keyboardType}
        inputMode={inputMode}
      />
      <Icon name="error-outline" size={30} color="#e63c3c" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    // borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
    paddingVertical: 20,
    //FIXME: change this to less when there is no error icon to be shown
    paddingHorizontal: 10,
    width: '80%',
    fontSize: 18,
  },
  customInputBox: {
    width: '80%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 20,
  },
});
