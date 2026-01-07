import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = React.createElement("h1", {}, "Chethan shetty");
//babel transiples this jsx code in into React.createElement
const jsxheading = <h1 className="headingjsx">Namaste react using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
//JSX heading
const Headingjsx = () => {
  <h3 id="jsxheading">This is heading created with the help of the jsx</h3>;
};

const head = <h5 className="chandu">Chandu</h5>;

const Functionalcomponent = () => {
  return (
    <div id="fc1">
      {/* //{}This brackets will used when we want to out our js code into our functional components  */}
       {head}{/*This is a react element inside a component */}
      <h2>This is the heading created using the functional component</h2>
    </div>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("babel"));
root1.render(<Functionalcomponent />);
