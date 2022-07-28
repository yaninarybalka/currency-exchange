import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Currency from "./Currency";

export default function App() {
  let apiUrl = `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`;
  let [data, setData] = useState(null);
  function handleResponse(response) {
    setData(response.data);
  }

  if (data) {
    return (
      <header>
        <Currency data={data} />
      </header>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
  }
}
