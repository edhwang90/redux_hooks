import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyCode, getSupportedCurrencies } from '../store/rates';

export const CurrencyCodePicker = ({ currencyCode }) => {
  const dispatch = useDispatch();
  const supportedCurrencies = useSelector(getSupportedCurrencies);

  const onChange = (e) => {
    dispatch(changeCurrencyCode(e.target.value));
  }

  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code, index) => (
        <option key={`${code}${index}`} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}