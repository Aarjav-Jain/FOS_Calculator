import {useReducer, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomForm from '../../src/components/common/custom-form';
import {getMLPrediction} from '../../src/utils/apis/modelApi';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function MachineLearning() {
  const initialValue = {
    A1: null,
    H1: null,
    A2: null,
    H2: null,
    BW1: null,
    BW2: null,
    CrH: null,
    CrBw: null,
    Dip: null,
    C: null,
    f: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_H1': {
        return {...state, H1: action.value};
      }
      case 'changed_A1': {
        return {...state, A1: action.value};
      }
      case 'changed_H2': {
        return {...state, H2: action.value};
      }
      case 'changed_A2': {
        return {...state, A2: action.value};
      }
      case 'changed_BW1': {
        return {...state, BW1: action.value};
      }
      case 'changed_BW2': {
        return {...state, BW2: action.value};
      }
      case 'changed_CrH': {
        return {...state, CrH: action.value};
      }
      case 'changed_CrBw': {
        return {...state, CrBw: action.value};
      }
      case 'changed_Dip': {
        return {...state, Dip: action.value};
      }
      case 'changed_C': {
        return {...state, C: action.value};
      }
      case 'changed_f': {
        return {...state, f: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleClick = async () => {
    const predictionValues = state;
    const unFormattedValues = Object.values(predictionValues);
    const predictionArray = unFormattedValues.map(i => Number(i));
    setLoading(true);
    try {
      const res = await getMLPrediction(predictionArray);
      setResult(res);
    } catch (e) {
      console.log('could not get prediction', e);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="black" />
    </View>
  ) : (
    <CustomForm
      state={state}
      btnText="Predict FOS"
      values={initialValue}
      handleClick={handleClick}
      dispatch={dispatch}
      result={result}
      setResult={setResult}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
