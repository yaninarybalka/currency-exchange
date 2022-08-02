import React from "react";
import "./App.css";

export default function Currency(props) {
  // console.log(props.data.data[0].ccy);

  return (
    <div className="currency-wrapper">
      <ul>
        {props.data.map(function (currency) {
          return (
            <li key={currency.ccy}>
              {" "}
              <strong> {currency.ccy} </strong>
              {currency.buy} / {currency.sale}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
