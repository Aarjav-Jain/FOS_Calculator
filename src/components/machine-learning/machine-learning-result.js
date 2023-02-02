import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MachineLearningResult({route}) {
  const {result} = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text>
        The Predicted FOS is:
        <Text>{result}</Text>
      </Text>
    </View>
  );
}
