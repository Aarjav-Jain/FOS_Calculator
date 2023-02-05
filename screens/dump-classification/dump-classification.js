import React, {useReducer, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  HIGHLY_UNSTABLE,
  UNSTABLE,
  VULNERABLE,
  SAFE,
  VERY_SAFE,
} from '../../src/utils/dump-classfication-result-constants';
import CustomForm from '../../src/components/common/custom-form';
import * as Validator from 'validatorjs';

export default function DumpClassification() {
  // nested object with name and id fields different
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

  const initialKeys = Object.keys(initialValue);

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

  // TODO: send these ruls to the common component and then run it through a function on click and if it passes
  // execute handleclick prop
  // const rules = {
  //   A1: 'required|numeric',
  //   H1: 'required|numeric',
  //   A2: 'required|numeric',
  //   H2: 'required|numeric',
  //   BW1: 'required|numeric',
  //   BW2: 'required|numeric',
  //   CrH: 'required|numeric',
  //   CrBw: 'required|numeric',
  //   Dip: 'required|numeric',
  //   C: 'required|numeric',
  //   f: 'required|numeric',
  // };

  const [state, dispatch] = useReducer(reducer, initialValue);
  // const [errObj, setErrorObj] = useState({
  //   A1: '',
  //   H1: '',
  //   A2: '',
  //   H2: '',
  //   BW1: '',
  //   BW2: '',
  //   CrH: '',
  //   CrBw: '',
  //   Dip: '',
  //   C: '',
  //   f: '',
  // });

  const navigation = useNavigation();

  // const validateInput = () => {
  //   let validation = new Validator(initialValue, rules);
  //   if (validation.fails()) {
  //     setErrorObj({
  //       A1: validation.has(A1),
  //       H1: validation.has(H1),
  //       A2: validation.has(A2),
  //       H2: validation.has(H2),
  //       BW1: validation.has(BW1),
  //       BW2: validation.has(BW2),
  //       CrH: validation.has(CrH),
  //       CrBw: validation.has(CrBw),
  //       Dip: validation.has(Dip),
  //       C: validation.has(C),
  //       f: validation.has(F),
  //     });
  //     return false;
  //   }
  //   return true;
  // };

  const checkFOS = rating => {
    let result = '';
    if (rating <= 30) result = HIGHLY_UNSTABLE;
    else if (rating <= 50) result = UNSTABLE;
    else if (rating <= 60) result = VULNERABLE;
    else if (rating <= 80) result = SAFE;
    else if (rating <= 100) result = VERY_SAFE;

    navigation.navigate('Dump Classification Result', {result: result});
  };

  const handleClick = () => {
    if (!validateInput()) return;

    let rating = 0;

    // if (state.A1 < 30) rating += 20;
    // else if (state.A1 < 34) rating += 18;
    // else if (state.A1 < 38) rating += 16;
    // else if (state.A1 < 42) rating += 12;
    // else if (state.A1 < 46) rating += 8;
    // else if (state.A1 < 50) rating += 4;
    // else rating += 0;

    rating +=
      state.A1 < 38
        ? 20 - Math.floor((state.A1 >= 26 ? state.A1 - 26 : 0) / 4) * 2
        : state.A1 < 50
        ? 12 - Math.floor((state.A1 >= 38 ? state.A1 - 38 : 0) / 4) * 4
        : 0;

    // if (state.H1 < 26) rating += 11;
    // else if (state.H1 < 30) rating += 9;
    // else if (state.H1 < 34) rating += 7;
    // else if (state.H1 < 38) rating += 5;
    // else if (state.H1 < 42) rating += 3;
    // else if (state.H1 < 44) rating += 1;
    // else rating += 0;

    rating +=
      state.H1 < 44
        ? 11 - Math.floor((state.H1 >= 22 ? state.H1 - 22 : 0) / 4) * 2
        : 0;

    // if (state.A2 < 25) rating += 6;
    // else if (state.A2 < 30) rating += 5;
    // else if (state.A2 < 35) rating += 4;
    // else if (state.A2 < 40) rating += 3;
    // else if (state.A1 < 45) rating += 2;
    // else rating += 0;

    rating +=
      state.A2 < 45
        ? 6 - Math.floor((state.A2 >= 20 ? state.A2 - 20 : 0) / 5)
        : 0;

    // if (state.H2 < 20) rating += 6;
    // else if (state.H2 < 24) rating += 5;
    // else if (state.H2 < 28) rating += 4;
    // else if (state.H2 < 32) rating += 3;
    // else if (state.H2 < 36) rating += 2;
    // else if (state.H2 < 40) rating += 1;
    // else rating += 0;

    rating +=
      state.H2 < 40
        ? 6 - Math.floor((state.H2 >= 16 ? state.H2 - 16 : 0) / 4)
        : 0;

    // if (state.BW1 < 5) rating += 0;
    // else if (state.BW1 < 7.5) rating += 1;
    // else if (state.BW1 < 10) rating += 1.5;
    // else if (state.BW1 < 12.5) rating += 2;
    // else if (state.BW1 < 15) rating += 2.5;
    // else rating += 3;

    rating +=
      state.BW1 < 5
        ? 0
        : state.BW1 < 15
        ? 1 + Math.floor((state.BW1 >= 5 ? state.BW1 - 5 : 0) / 2.5) * 0.5
        : 3;

    // if (state.BW2 < 10) rating += 0;
    // else if (state.BW2 < 13) rating += 1;
    // else if (state.BW2 < 16) rating += 2;
    // else if (state.BW2 < 19) rating += 3;
    // else if (state.BW2 < 22) rating += 4;
    // else if (state.BW2 < 25) rating += 5;

    rating +=
      state.BW2 < 25 ? Math.floor((state.BW2 >= 7 ? state.BW2 - 7 : 0) / 3) : 0;

    // if (state.CrH < 10) rating += 7;
    // else if (state.CrH < 13) rating += 5;
    // else if (state.CrH < 16) rating += 4;
    // else if (state.CrH < 19) rating += 3;
    // else if (state.CrH < 22) rating += 2;
    // else if (state.CrH < 25) rating += 1;

    rating +=
      state.CrH < 10
        ? 7
        : state.CrH < 25
        ? 5 - Math.floor((state.CrH >= 10 ? state.CrH - 10 : 0) / 3)
        : 0;

    // if (state.CrBw < 5) rating += 0;
    // else if (state.CrBw < 7.5) rating += 1;
    // else if (state.CrBw < 10) rating += 2;
    // else if (state.CrBw < 12.5) rating += 3;
    // else if (state.CrBw < 15) rating += 4;

    rating +=
      state.CrBw < 15
        ? Math.floor((state.CrBw >= 2.5 ? state.CrBw - 2.5 : 0) / 2.5)
        : 0;

    // if (state.Dip < 2) rating += 1;
    // else if (state.Dip < 4) rating += 0.75;
    // else if (state.Dip < 6) rating += 0.5;
    // else if (state.Dip < 7) rating += 0;

    rating += state.Dip < 6 ? 1 - Math.floor(state.Dip / 2) * 0.25 : 0;

    // if (state.C < 10) rating += 2;
    // else if (state.C < 20) rating += 3;
    // else if (state.C < 30) rating += 4;
    // else if (state.C < 40) rating += 5;
    // else if (state.C < 50) rating += 6;
    // else if (state.C < 60) rating += 7;
    // else if (state.C < 70) rating += 8;
    // else if (state.C < 80) rating += 9;
    // else rating += 10;

    rating += state.C < 80 ? 2 + Math.floor(state.C / 10) : 10;

    // if (state.f < 10) rating += 0;
    // else if (state.f < 15) rating += 4;
    // else if (state.f < 20) rating += 8;
    // else if (state.f < 25) rating += 12;
    // else if (state.f < 30) rating += 16;
    // else if (state.f < 35) rating += 20;
    // else if (state.f < 40) rating += 24;
    // else rating += 28;

    rating +=
      state.f < 40 ? Math.floor((state.f >= 5 ? state.f - 5 : 0) / 5) * 4 : 28;

    checkFOS(rating);
  };

  return (
    <CustomForm
      state={state}
      btnText="Predict FOS Class"
      initialKeys={initialKeys}
      handleClick={handleClick}
      dispatch={dispatch}
    />
  );
}
