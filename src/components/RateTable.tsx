import React from 'react';
import { useSelector } from 'react-redux';
import { getName } from '../store/user';

import { Rate } from '../lib/types';

export const RateTable = ({ currencyData, amount }: {currencyData:Rate[], amount:number}) => {
  const name = useSelector(getName);

  return (
    <table className="ExchangeRate-table">
      <tbody>
        {
          currencyData.map(({ code, rate }: { code:string, rate:number}, index) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={`${code}${index}`}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          )})
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Prepared for {name}</td>
        </tr>
      </tfoot>
    </table>
  );
}
