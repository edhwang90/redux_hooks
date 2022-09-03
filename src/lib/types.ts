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