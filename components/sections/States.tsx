"use client";

import StatsSection from "../molecules/StatsSection/StatsSection";
import { useTranslation } from "react-i18next";

type State = {
  value: string;
  label: string;
};

type Props = {
  id:string;
  lang:string;
  content:State[];
};

const States: React.FC<Props> = ({ content,id,lang }) => {
  

  

  return (
    <div
      className="max-w-[1512px] h-[188px] flex mx-auto items-center justify-items-center gap-[200px]
      max-[1335px]:gap-[50px] max-[1335px]:h-auto max-[1335px]:text-center max-[1335px]:justify-items-center 
      max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-5 max-[768px]:w-full max-[768px]:text-center
      max-[480px]:flex max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:px-5 max-[480px]:items-center
      max-[320px]:gap-3 max-[320px]:px-3 max-[320px]:mt-[100px]"
    >
      {content.map((item, index) => (
        <StatsSection key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default States;
