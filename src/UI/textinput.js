import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';

export default function CustomTextInput({
  placeholder = '',
  placeholderTextColor = 'black',
  value,
  onChangeText,
  keyboardType,
  inputMode,
  hasError = false,
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
      {hasError && (
        <Icon
          name="error-outline"
          size={30}
          color="#e63c3c"
          style={{marginRight: horizontalScale(20)}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    color: 'black',
    paddingVertical: verticalScale(20),
    flex: 1,
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(20),
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
    borderRadius: moderateScale(10),
    marginTop: verticalScale(20),
  },
});
