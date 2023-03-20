export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}

export type BadgeLabelType = "area" | "population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
}
