import React from "react";
import ReactDOM from "react-dom/client";

// this is a react element
const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const Title = () => (
  <h1 id="title" key="h2">
    Namaste Component
  </h1>
);

// this is a react component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {Title()}
      <Title />
      <h1>Namaste React Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  //rendering a react element
root.render(<HeaderComponent />); //rendering a react component
