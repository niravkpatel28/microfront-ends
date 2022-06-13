// import react
import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// create mount function

// el == element where the component has to be rendered
// Since the microfront end will need its own navigation
// This navigation will have to be somewhat dependent on the
/// browser url, but it cannot directly take information from browser url
// Hence we will not use BrowserRouter, instead use MemoryRouter or
// a low level routing component Router

// Router needs access to history object
// this is done by using history module..

// Find other ways in which the same can be implemented using MemoryRouter
// and the latest version of React Router
const mount = (el, { onNavigate, defaultHistory }) => {
  // ReactDOM.render(<h1> HI FROM MARKETING</h1>, el);

  const history = defaultHistory || createMemoryHistory();

  // history object has some event listener tied to it.
  // this will be used to listen to changes in memory router
  // onNavigate function is callback sent from container

  // when marketing is running in isolation, it will not receive onNavigate
  if (onNavigate) {
    history.listen(onNavigate);
  }

  // this history object will be passed to the App component as a prop
  ReactDOM.render(<App history={history} />, el);

  // Function to help container understand that marketing has navigated
  return {
    onContainerNavigate: (location) => {
      const { pathname: containerPathName } = location;
      const { pathname } = history;
      console.log("Container has navigated to some place", containerPathName);
      if (pathname !== containerPathName) {
        history.push(containerPathName);
      }
    },
  };
};
// check if running independently

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    // passing an empty object since onNavigate is not available in
    // when the app is running in isolation
    // defaultHistory == enables browser history
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
// check if running in a container

export { mount };
