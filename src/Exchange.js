import React, { useState } from "react";
import "./App.css";

export default function Exchange(props) {
  let eurMultiplier = props.data[1].buy;
  let eurDivider = props.data[1].sale;
  let [value, setValue] = useState(null);
  let convertedValue = value * eurMultiplier;

  let [uahValue, setUahValue] = useState(null);
  let convertedUahValue = uahValue / eurDivider;

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleUAHChange(event) {
    setUahValue(event.target.value);
  }

  return (
    <form>
      <div className="row pb-4">
        <div className="col-2 input-wrapper">
          <input
            type="number"
            className="valueInput"
            placeholder={convertedUahValue}
            onChange={handleChange}
          ></input>{" "}
        </div>
        <div className="col-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>EUR</option>
            <option value="USD">USD</option>
            <option value="EUR">UAH</option>
            <option value="RUR">RUR</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-2 input-wrapper">
          <input
            type="number"
            className="valueInput"
            placeholder={convertedValue}
            onChange={handleUAHChange}
          ></input>{" "}
        </div>
        <div className="col-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUR">RUR</option>
          </select>
        </div>
      </div>
    </form>
  );
}
