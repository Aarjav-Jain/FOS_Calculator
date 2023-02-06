import {useReducer} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomForm from '../../src/components/common/custom-form';

export default function DumpClassification() {
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
  const navigation = useNavigation();

  const handleClick = () => {
    console.log('iskdas');
  };

  return (
    <CustomForm
      state={state}
      btnText="Predict FOS"
      values={initialValue}
      handleClick={handleClick}
      dispatch={dispatch}
    />
  );
}
