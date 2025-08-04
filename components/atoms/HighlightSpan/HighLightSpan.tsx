import React from "react";
type props = {
  children: React.ReactNode;
};

const HighLightSpan: React.FC<props> = ({ children }) => (
  <span style={{ color: "#eb6f2d" }}>{children}</span>
);
export default HighLightSpan;
