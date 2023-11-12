// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(1);
  const [inputC, setInputC] = useState("USD");
  const [outputC, setOutputC] = useState("EUR");

  useEffect(function() {
    async function Fetching() {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${input}&from=${inputC}&to=${outputC}`);
      const data = await res.json();
      setOutput(data.rates[outputC]);
    }

    Fetching()
  },[input, outputC, inputC])
  

  return (
    <div>
      <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <select value={inputC} onChange={(e) => setInputC(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={outputC} onChange={(e) => setOutputC(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p className="output">{Math.round(output)}</p>
    </div>
  );
}
