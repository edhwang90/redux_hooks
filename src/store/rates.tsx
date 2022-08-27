import { AnyAction, Dispatch } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../lib/types';
import { getExchangeRates } from '../api';

const initialState = {
  amount: "19.99",
  currencyCode: "JPY",
  currencyData: [{ displayLabel: "US Dollars", code: "USD", rate: 1.0 }],
  supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]
}

// to change <any>
export const ratesReducer = (state = initialState, action:PayloadAction<any>) => {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case 'rates/labelReceived': {
      const { displayLabel, currencyCode }: { displayLabel:string, currencyCode:string} = action.payload;
      return {
        ...state,
        currencyData: state.currencyData.map(data => {
          if (currencyCode === data.code) {
            return { ...data, displayLabel };
          }
          return data
        })
      }
    }
    case 'rates/ratesReceived': {
      const codes = Object.keys(action.payload).concat(state.currencyCode);
      const currencyData = [];

      for (let code in action.payload) {
        currencyData.push({code, rate: action.payload[code]})
      }

      return { ...state, currencyData: currencyData, supportedCurrencies: codes  };
    }
    default:
      return state;
  }
}

//selectors
export const getAmount = ({ rates }: { rates:AppState }) => rates.amount;
export const getCurrencyCode = ({ rates }: { rates:AppState }) => rates.currencyCode;
export const getCurrencyData = ({ rates }: { rates:AppState }) => rates.currencyData;
export const getSupportedCurrencies = ({ rates }: { rates:AppState }) => rates.supportedCurrencies;
export const getDisplayLabel = ({ rates }: { rates:AppState }, currencyCode:string) => {
  const match = rates.currencyData.find(data => data.code === currencyCode);
  
  if (match) return match.displayLabel;
}

//action types
export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';

//action creators
export const changeAmount = (amount:string) => ({
  type: AMOUNT_CHANGED,
  payload: amount
});

export const changeCurrencyCode = (currencyCode:string) => {
  return function changeCurrencyCodeThunk(dispatch:Dispatch, getState:any) {
    const state = getState();
    const supportedCurrencies = getSupportedCurrencies(state);
    
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode
    });
    
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: 'rates/ratesReceived',
        payload: rates
      })
    })
  }
}

//thunks
export const getInitialRates = (dispatch:Dispatch, getState) => {
  const state = getState();
  const currencyCode:string = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
}