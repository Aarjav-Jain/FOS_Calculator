import {useNavigation} from '@react-navigation/native';
import {useReducer, useState} from 'react';
import CustomForm from '../../src/components/common/custom-form';
import {getSafetyChartPrediction} from '../../src/utils/apis/modelApi';

export default function SafetyChart() {
  const initialValue = {
    CrH: null,
    H1: null,
    A1: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_CrH': {
        return {...state, CrH: action.value};
      }
      case 'changed_H1': {
        return {...state, H1: action.value};
      }
      case 'changed_A1': {
        return {...state, A1: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const [result, setResult] = useState(null);

  // const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();

  function calcDistance(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }

  function calcIncenter(x1, x2, x3) {
    const a = calcDistance(x2, x3);
    const b = calcDistance(x1, x3);
    const c = calcDistance(x1, x2);
    const sum_of_sides = a + b + c;
    const incenter1 = (a * x1) / sum_of_sides;
    const incenter2 = (b * x2) / sum_of_sides;
    const incenter3 = (c * x3) / sum_of_sides;
    const ans = [incenter1, incenter2, incenter3];
    return ans;
  }

  const handleClick = async () => {
    // setLoading(true);
    const predictionValues = state;
    const unFormattedValues = Object.values(predictionValues);
    const numberArray = unFormattedValues.map(i => Number(i));
    const x1 = numberArray[0];
    const x2 = numberArray[1];
    const x3 = numberArray[2];
    const predictionArray = calcIncenter(x1, x2, x3);
    // console.log(predictionArray);
    try {
      const res = await getSafetyChartPrediction(predictionArray);
      // setLoading(false);
      // navigation.navigate('Safety Chart Result', {predictedValue: res});
      setResult(res);
    } catch (e) {
      console.log('could not get safety chart prediction', e);
      setResult(null);
      // setLoading(false);
    }
  };

  return (
    <CustomForm
      state={state}
      btnText="Predict Class"
      values={initialValue}
      handleClick={handleClick}
      dispatch={dispatch}
      result={result}
      setResult={setResult}
    />
  );
}
