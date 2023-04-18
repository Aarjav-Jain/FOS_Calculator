import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {
  HIGHLY_UNSTABLE,
  UNSTABLE,
  VULNERABLE,
  SAFE,
  VERY_SAFE,
} from '../../utils/dump-classfication-result-constants';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/metrics';

// show different colours for outcomes eg red for fail
//green for safe and yellow for vulureable

export default function DumpClassificationResult({route}) {
  const {result} = route.params;
  const navigation = useNavigation();

  const getBgColor = () => {
    if (result == HIGHLY_UNSTABLE) return '#FF0032';
    else if (result == UNSTABLE) return '#FF8B13';
    else if (result == VULNERABLE) return '#FFD56F';
    else if (result == SAFE) return '#1F8A70';
    else return '#CDE990';
  };

  const bgColor = getBgColor();
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.card,
          backgroundColor: bgColor,
        }}>
        <Text style={styles.cardText}>For Yor Entered Values: </Text>
        <Text style={styles.cardText}>
          The dump is <Text style={styles.result}>{result}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(300),
    height: verticalScale(300),
    borderRadius: moderateScale(30),
  },
  cardText: {
    fontSize: moderateScale(20),
    color: 'black',
  },
  result: {
    fontWeight: 900,
    fontSize: moderateScale(32),
  },
});
