import React, { useState } from "react";
import "./App.css";

export default function Exchange(props) {
  console.log(props);
  let [value, setValue] = useState(0);
  function handleChange(event) {
    let convertedValue = event.target.value * 10;
    setValue(convertedValue);
  }

  return (
    <form>
      <div className="row pb-4">
        <div className="col-2 input-wrapper">
          <input
            type="number"
            className="valueInput"
            placeholder="1"
            onChange={handleChange}
          ></input>{" "}
        </div>
        <div className="col-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Українська гривня</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUR">RUR</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-2 input-wrapper">
          <input
            type="number"
            className="valueInput"
            placeholder={value}
          ></input>{" "}
        </div>
        <div className="col-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Євро</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUR">RUR</option>
          </select>
        </div>
      </div>
    </form>
  );
}
