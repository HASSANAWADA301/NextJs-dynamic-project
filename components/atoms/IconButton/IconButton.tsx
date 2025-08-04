import React from "react";
import type { IconType } from "react-icons";


type props = {
  Icon: IconType;
  className?: string;
  
};
const IconButton: React.FC<props> = ({ Icon, className}) => (
  <div className={`${className ?? ""}`}>{Icon({})}</div>
);
export default IconButton;
