import React from "react";
import IconButton from "../IconButton/IconButton";
import { FaChevronCircleDown } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const BulletedText: React.FC<Props> = ({ children, style }) => (
  <li
    className="
      text-[14px] text-[#797979] text-left flex items-center gap-[10px] list-none p-0 
      max-[1335px]:flex-col max-[1335px]:gap-[20px] max-[1335px]:w-auto max-[1335px]:h-auto max-[1335px]:text-center max-[1335px]:p-[20px]
    "
  >
    <i className="text-[#EB6F2D]">
      <IconButton Icon={FaChevronCircleDown} />
    </i>
    <p style={style} className="max-[1024px]:text-[16px] max-[1024px]:-mt-[20px]">
      {children}
    </p>
  </li>
);

export default BulletedText;
