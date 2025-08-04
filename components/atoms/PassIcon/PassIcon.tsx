import React from "react";
import { FaPlay } from "react-icons/fa";

const PassIcon: React.FC<{ direction?: "left" | "right" }> = ({ direction = "right" }) => (
  <i style={{ color: "#eb6f2d", transform: direction === "left" ? "rotate(180deg)" : undefined ,justifyContent:'center',alignItems:"center",margin:'auto',display:'flex'}} >{FaPlay({})}</i>
);

export default PassIcon;