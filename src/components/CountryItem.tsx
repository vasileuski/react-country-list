import { link } from "fs";
import React from "react";
import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface ICountryItem {
  country: ICountry;
}

export const CountryItem = ({ country }: ICountryItem) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <p className="col py-4">{country.name}</p>
        <span className="col" style={{ width: "1000px" }}>
          <img
            src={country.flag}
            alt={country.name}
            className="img-thumbnail"
          />
        </span>
        <p className="col py-4">{country.capital}</p>

        <Badge
          value={country.population}
          type="population"
          color={Color.Primary}
        />
        <br />

        <Badge value={country.area} type="area" color={Color.Secondary} />
      </div>
    </li>
  );
};
