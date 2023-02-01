import {StyleSheet, Text, Pressable} from 'react-native';

export default function Button({text, handlePress}) {
  return (
    <Pressable style={styles.btn} onPress={handlePress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    // borderRadius: 10,
    backgroundColor: 'black',
    width: '80%',
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
