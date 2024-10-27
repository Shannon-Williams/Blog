import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import App from "./App";
import topics from "./DumbQs.csv";
import reportWebVitals from "./reportWebVitals";

function HelloWorld() {
  console.log(topics);
  const [text, setText] = useState();

  const load = function () {
    fetch("./DumbQs.csv")
      .then((response) => {
        console.log(response);
        response.text();
      })
      .then((responseText) => {
        setText(responseText);
        console.log(responseText);
      });
  };

  return (
    <div>
      <button onClick={load}>load</button>
      <h2>text:</h2>
      <pre>{text}</pre>
    </div>
  );
}

function CVSImport() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input type={"file"} accept={".csv"} />
        <button>IMPORT CSV</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelloWorld />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
