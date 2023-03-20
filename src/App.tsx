import React from "react";
import { CountryList } from "./components/CountryList";
import { transformedCountries } from "./mappers";

export const App = () => {
  console.log(transformedCountries);

  return (
    <div className="container">
      <h1 className="my-3 col">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
