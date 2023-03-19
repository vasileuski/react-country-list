import { link } from "fs";
import React from "react";
import { Badge } from "./Badge";

export const CountryItem = () => {
  return (
    <li className="list-group-item">
      <p>Tom</p>
      <Badge />
      <Badge />
    </li>
  );
};
