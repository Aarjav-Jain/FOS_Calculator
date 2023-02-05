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
      <Icon
        name="error-outline"
        size={30}
        color="#e63c3c"
        style={{marginRight: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    color: 'black',
    paddingVertical: 20,
    flex: 1,
    fontSize: 18,
    marginLeft: 20,
    // backgroundColor: 'blue',
  },
  customInputBox: {
    width: '80%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 20,
  },
});
