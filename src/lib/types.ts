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

// export type Actions = {
//   type: string,
//   payload: 
// }