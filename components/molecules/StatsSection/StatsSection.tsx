"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  value: string;
  label: string;
};

const StatsSection: React.FC<Props> = ({ value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[0-9.,]/g, "").trim();

  return (
    <div
      ref={ref}
      className="text-center justify-center max-[768px]:flex-col max-[768px]:gap-5 max-[768px]:w-full max-[768px]:h-auto max-[768px]:text-center max-[768px]:p-5"
    >
      <h1 className="text-[64px] font-medium max-[768px]:text-[36px]">
        {inView && <CountUp end={numericValue} duration={5} separator="," />}{" "}
        {suffix && ` ${suffix}`}
      </h1>
      <p className="text-[20px] font-normal text-[#8e8e8e] max-[768px]:text-[16px]">
        {label}
      </p>
    </div>
  );
};

export default StatsSection;
