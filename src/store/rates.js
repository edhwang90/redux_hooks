import { getExchangeRates } from '../api';

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const initialState = {
  amount: "19.99",
  currencyCode: "JPY",
  currencyData: [{ displayLabel: "US Dollars", code: "USD", rate: 1.0 }],
  supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]
}

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case 'rates/labelReceived': {
      const { displayLabel, currencyCode } = action.payload;
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
      const codes = Object.keys(action.payload);
      const currencyData = [];

      for (let code in action.payload) {
        currencyData.push({code, rate: action.payload[code]})
      }

      return { ...state, currencyData: action.payload, supportedCurrencies: codes  }.concat(state.currencyCode);
    }
    default:
      return state;
  }
}

//selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;
export const getSupportedCurrencies = (state) => state.rates.supportedCurrencies;
export const getDisplayLabel = (state, currencyCode) => {
  const match = state.rates.currencyData.find(data => data.code === currencyCode);

  if (match) return match.displayLabel;
}

//action types
export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';

//action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount
});

export function changeCurrencyCode(currencyCode) {
  return function changeCurrencyCodeThunk(dispatch, getState) {
    const state = getState();
    const supportedCurrencies = getSupportedCurrencies(state);
    
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode
    });
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: 'ratest/ratesReceived',
        payload: rates
      })
    })
  }
}

//thunks
export const getInitialRates = (dispatch, getState) => {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
}