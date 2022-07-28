import React from "react";
import "./App.css";

export default function Currency(props) {
  // console.log(props.data.data[0].ccy);

  return (
    <div className="currency-wrappers">
      <ul>
        {props.data.map(function (currency, index) {
          if (index < 3) {
            return (
              <li key={index}>
                {" "}
                <strong> {currency.ccy} </strong>
                {currency.buy} / {currency.sale}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}
