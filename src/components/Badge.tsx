import React from "react";
import { BadgeLabelType, Color } from "../types";

interface IBadge {
  value: number;
  type: BadgeLabelType;
  color: Color;
  className?: string;
  style?: any;
}

export const Badge = ({ value, type, color }: IBadge) => {
  return (
    <span className={`badge bg-${color} col h-50 mx-2 p-2 my-4 `}>
      {type}: {value}
    </span>
  );
};
