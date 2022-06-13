// this is where the marketing front end will be imported
// for this we will use References. Since we need to target a certain dom element
// useRef hook will be used

import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketingApp/MarketingApp";

const MarketingApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    // mount function needs a DOM element where the whole
    // body of the microfront end will be rendered
    // ref.current --> talks about the current DOM elements attached to ref
    // mount from marketing returns onContainerNavigate
    const { onContainerNavigate } = mount(ref.current, {
      // history.navigation -- passes a location object
      onNavigate: (location) => {
        const { pathname: nextPathName } = location;
        // console.log("Container noticed navigation in marketing", nextPathName);
        // synchronize the container history object with marketing history

        // to avoid infinite loop we check with current path and nextPathName
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    //history of container has a the same listen function
    history.listen(onContainerNavigate);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketingApp;
