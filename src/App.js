import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Currency from "./Currency";
import Exchange from "./Exchange";

export default function App() {
  let apiUrl = `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`;
  let [data, setData] = useState(null);
  let [multiplier, setMultiplier] = useState(null);
  function handleResponse(response) {
    setData(response.data);
    setMultiplier(response.data);
  }

  if (data) {
    return (
      <div className="container">
        <header>
          <Currency data={data} />
        </header>
        <Exchange data={multiplier} />
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
  }
}
