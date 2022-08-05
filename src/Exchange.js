import React, { useState, useEffect } from "react";
import "./App.css";

const FROM_CUR = ["EUR", "USD", "UAH", "RUR"];
const TO_CUR = ["UAH", "EUR", "USD", "RUR"];

export default function Exchange(props) {
  let [fromAmount, setFromAmount] = useState(1);
  let [toAmount, setToAmount] = useState("");
  const [buyOrSell, setBuyOrSell] = useState("buy");
  const [conversion, setConversion] = useState({});
  const [conversionKey, setConversionKey] = useState(FROM_CUR[0]);
  const [convertFrom, setConvertFrom] = useState(FROM_CUR[0]);
  const [convertTo, setConvertTo] = useState(TO_CUR[0]);

  function handleFromChange(event) {
    const newFromAmount = event.target.value;
    setFromAmount(newFromAmount);
    const fromNum = parseFloat(newFromAmount);
    const multiplierStr = conversion[conversionKey][buyOrSell];
    const multiplier = parseFloat(multiplierStr);

    if (newFromAmount === "") {
      setToAmount("");
    } else {
      if (buyOrSell === "buy") {
        setToAmount((fromNum * multiplier).toFixed(2));
      } else {
        setToAmount((fromNum / multiplier).toFixed(2));
      }
    }
  }

  function handleToChange(event) {
    const newToAmount = event.target.value;
    setToAmount(newToAmount);
    const toNum = parseFloat(newToAmount);
    const multiplierStr = conversion[conversionKey][buyOrSell];
    const multiplier = parseFloat(multiplierStr);

    if (newToAmount === "" || newToAmount === "0") {
      setFromAmount("");
    } else {
      if (buyOrSell === "buy") {
        setFromAmount((toNum / multiplier).toFixed(2));
      } else {
        setFromAmount((toNum * multiplier).toFixed(2));
      }
    }
  }

  function handleFromCurrencyChange(event) {
    setConvertFrom(event.target.value);
    setFromAmount("");
    setToAmount("");
    if (event.target.value === "UAH") {
      setConvertTo("EUR");
    } else if (event.target.value === convertTo) {
      setConvertTo("UAH");
    }
  }

  function handleToCurrencyChange(event) {
    setConvertTo(event.target.value);
    setFromAmount("");
    setToAmount("");
    if (event.target.value !== "UAH" && convertFrom !== "UAH") {
      setConvertFrom("EUR");
    }
    if (event.target.value === "UAH" && convertFrom === "UAH") {
      setConvertFrom("EUR");
    }
  }

  useEffect(() => {
    const newConversion = {};
    props.data.forEach((item) => {
      if (item.base_ccy === "UAH") {
        newConversion[item.ccy] = item;
      }
    });

    setConversion(newConversion);
  }, [props.data]);

  useEffect(() => {
    if (!conversion[convertFrom]) {
      setBuyOrSell("sale");
      setConversionKey(convertTo);
    } else {
      setBuyOrSell("buy");
      setConversionKey(convertFrom);
    }
  }, [conversion, convertFrom, convertTo]);

  return (
    <div className="container">
      <form>
        <div className="row pb-4">
          <div className="col-2 input-wrapper">
            <input
              type="number"
              className="valueInput"
              value={fromAmount}
              onChange={handleFromChange}
            ></input>{" "}
          </div>
          <div className="col-3">
            <select
              className="form-select"
              aria-label="Default select example"
              value={convertFrom}
              onChange={handleFromCurrencyChange}
            >
              {FROM_CUR.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-2 input-wrapper">
            <input
              type="number"
              className="valueInput"
              value={toAmount}
              onChange={handleToChange}
            ></input>{" "}
          </div>
          <div className="col-3">
            <select
              className="form-select"
              aria-label="Default select example"
              value={convertTo}
              onChange={handleToCurrencyChange}
            >
              {TO_CUR.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
