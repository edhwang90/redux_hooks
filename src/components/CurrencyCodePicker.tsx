import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyCode, getSupportedCurrencies } from '../store/rates';

export const CurrencyCodePicker = ({ currencyCode }:{ currencyCode:string}) => {
  const dispatch = useDispatch();
  const supportedCurrencies:string[] = useSelector(getSupportedCurrencies);

  const onChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const changedCurrencyCode:Function = changeCurrencyCode;
    dispatch(changedCurrencyCode(e.target.value));
  }

  return (
    <select className="currencyCode" 
            value={currencyCode} 
            onChange={onChange}>
      {supportedCurrencies.map((code:string, index:number) => (
        <option key={`${code}${index}`} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}