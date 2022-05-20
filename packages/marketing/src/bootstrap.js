// import react
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// create mount function

// el == element where the component has to be rendered
const mount = (el) => {
  // ReactDOM.render(<h1> HI FROM MARKETING</h1>, el);
  ReactDOM.render(<App />, el);
};
// check if running independently

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// check if running in a container

export { mount };
