// this is where the marketing front end will be imported
// for this we will use References. Since we need to target a certain dom element
// useRef hook will be used

import React, { useRef, useEffect } from "react";
import { mount } from "marketingApp/MarketingApp";

const MarketingApp = () => {
  const ref = useRef();
  useEffect(() => {
    // mount function needs a DOM element where the whole
    // body of the microfront end will be rendered
    // ref.current --> talks about the current DOM elements attached to ref
    mount(ref.current);
  });
  return <div ref={ref}></div>;
};

export default MarketingApp;
