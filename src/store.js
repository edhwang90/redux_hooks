import { createStore } from 'redux';

const initialState = {
  amount: "12.00",
  currencyCode: "EUR"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'amountChanged':
      return { ...state, amount: action.payload };
    case 'currencyCodeChanged':
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);