import React from "react";

type props = {
  label: string;
  lang:string;
};

const TitleText: React.FC<props> = ({ label,lang }) => (
  <p className={`text-[20px] font-normal text-left max-[1335px]:text-center ${lang=="ar"?"text-right":""}`}>
    {label}
  </p>
);
export default TitleText;
