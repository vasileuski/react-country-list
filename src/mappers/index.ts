import countries from "../country-data.json";
import { ICountry } from "../types";

export const transformedCountries: ICountry[] = countries.map((country) => {
  return {
    flag: country.flags.svg,
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    area: country.area,
    region: country.region,
  };
});
