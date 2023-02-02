import {useNavigation} from '@react-navigation/native';
import {useReducer} from 'react';
import CustomForm from '../../src/components/common/custom-form';

export default function SafetyChart() {
  const initialValue = {
    CrH: null,
    Sh: null,
    Sa: null,
  };

  const initialKeys = Object.keys(initialValue);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_CrH': {
        return {...state, CrH: action.value};
      }
      case 'changed_Sh': {
        return {...state, Sh: action.value};
      }
      case 'changed_Sa': {
        return {...state, Sa: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const navigation = useNavigation();

  const handleClick = () => {
    console.log('handleClicked');
  };

  return (
    <CustomForm
      state={state}
      btnText="Predict Class"
      initialKeys={initialKeys}
      handleClick={handleClick}
      dispatch={dispatch}
    />
  );
}
