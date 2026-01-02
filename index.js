const heading = React.createElement(
  "h1",
  { hi: "chandu" },
  "This is printed using the react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const heading2 = React.createElement(
  "h2",
  { id: "Head2" },
  "This is heading 2"
);
// root.render(heading2);
