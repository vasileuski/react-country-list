import React from "react";
import { CountryList } from "./components/CountryList";

export const App = () => {
  return (
    <div className="container">
      <h1 className="my-3">Country List</h1>
      <CountryList />
    </div>
  );
};
