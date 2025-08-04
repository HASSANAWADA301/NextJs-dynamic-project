import React from "react";

type props = {
  text: string;
  highlighted?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const ChoiceTag: React.FC<props> = ({ text, highlighted,onMouseEnter,onMouseLeave }) => (
  <div
    className={`
      rounded-[21px] border border-[#dedede] text-[12px] font-normal p-[10px]
      max-[768px]:text-[14px] max-[768px]:py-[5px]
      ${highlighted ? "bg-[#f2f2f2]" : ""}
    `}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <p>{text}</p>
  </div>
);
export default ChoiceTag;
