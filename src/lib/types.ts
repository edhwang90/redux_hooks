type CurrencyData = {
  displayLabel: string,
  code: string,
  rate: number
}

export type AppState = {
  amount: string,
  currencyCode: string,
  currencyData: CurrencyData[],
  supportedCurrencies: string[]
}

export type AppAction = {
  type: string,
  payload: string
}

export type Rate = {
  displayLabel: string,
  code: string,
  rate: number
}

// export type RatesLabels = {
//   "USD": string,
//   "EUR": string,
//   "MXN": string,
//   "JPY": string,
//   "CAD": string,
//   "GBP": string
// }

// export type Rates = {
//   "EUR": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   },
//   "USD": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   },
//   "CAD": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   },
//   "JPY": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   },
//   "MXN": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   },
//   "GBP": {
//     "USD": number,
//     "EUR": number,
//     "MXN": number,
//     "JPY": number,
//     "CAD": number,
//     "GBP": number
//   }
// }
