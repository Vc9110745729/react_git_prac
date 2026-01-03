import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = React.createElement("h1", {}, "Chethan shetty");
//babel transiples this jsx code in intp React.createElement
const jsxheading = <h1 className="headingjsx">Namaste react using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
//JSX heading
