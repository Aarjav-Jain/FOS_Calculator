import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MachineLearningResult({route}) {
  const {predictedValue} = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{color: 'black'}}>
        The Predicted FOS is:
        <Text style={{color: 'black'}}>{predictedValue}</Text>
      </Text>
    </View>
  );
}
