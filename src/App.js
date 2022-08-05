import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./Currency";
import Exchange from "./Exchange";

export default function App() {
  let apiUrl = `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`;
  let [data, setData] = useState(null);
  let [multiplier, setMultiplier] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(apiUrl, {
        signal: controller.signal,
      })
      .then(function (response) {
        const data = response.data.filter(
          (element) => element.base_ccy === "UAH"
        );
        setData(data);
        setMultiplier(data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (data === null) {
    return <span>Loading...</span>;
  }

  return (
    <body>
      <header>
        <Currency data={data} />
      </header>
      <Exchange data={multiplier} />
    </body>
  );
}
