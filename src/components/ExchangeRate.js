import { useSelector } from 'react-redux';
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField.tsx";
import { getAmount, getCurrencyCode, getCurrencyData, getSupportedCurrencies } from '../store/rates';

export const ExchangeRate = () => {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={getSupportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  )
}
