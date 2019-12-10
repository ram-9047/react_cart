import React from "react";
import { render } from "react-dom";
import data from "./data.json";

function App() {
  console.log(data);
  return <div>!Hello React Shopping Cart</div>;
}

render(<App />, document.getElementById("root"));
