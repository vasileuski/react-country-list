import React from "react";
import { ICountry } from "../types";
import { CountryItem } from "./CountryItem";

interface ICountryList {
  countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul className="list-group">
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
};
