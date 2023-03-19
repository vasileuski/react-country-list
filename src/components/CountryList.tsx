import React from "react";
import { CountryItem } from "./CountryItem";

export const CountryList = () => {
  return (
    <ul className="list-group">
      {[1, 2, 3].map((item) => {
        return <CountryItem />;
      })}
    </ul>
  );
};
