import React from "react";


type props = {
  text: string;
  lang:string;
};

const HighlightHeading: React.FC<props> = ({ text,lang }) => (
  <h1 className={`text-[64px] font-normal w-[1240px] h-[288px]
    ${lang=='ar'?"h-[200px]":""}
  max-[1335px]:w-auto max-[1335px]:h-auto max-[1335px]:px-5
 max-[1024px]:text-[42px] max-[1024px]:leading-[1.4] max-[1024px]:text-center max-[1024px]:w-auto max-[1024px]:h-auto max-[1024px]:px-5
 max-[768px]:text-[36px] max-[460px]:text-[30px] max-[320px]:text-[24px]
 `}>{text}</h1>
);
export default HighlightHeading;
