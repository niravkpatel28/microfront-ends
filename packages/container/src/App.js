import React from "react";
// import { mount } from "marketingApp/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MaketingApp";
import Header from "./components/Header";
export default () => {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Root Application:#12</h1> */}
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
