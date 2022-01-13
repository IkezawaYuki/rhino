import React from "react";
import { Fastar } from "react-icons";


const Star = ({ selected = false, onSelect = f => f }) => (
  <Fastar color={selected ? "red" : "gray" } />
);

export default Star;