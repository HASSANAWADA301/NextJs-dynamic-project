import React from "react";

type props = {
  text: string;
  lang:string;
};

const ParagraphText: React.FC<props> = ({ text ,lang}) => (
  <h6 className={`
      text-[16px] font-normal w-[449px] h-[72px] text-left
      ${lang=="ar"?"text-right":""}
      max-[1024px]:text-center
      max-[768px]:text-[14px] max-[768px]:w-full max-[768px]:h-auto max-[768px]:mt-[15px]
    `}>{text}</h6>
);
export default ParagraphText;
