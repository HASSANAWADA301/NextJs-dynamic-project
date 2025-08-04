"use client";

import React, { useEffect, useState } from "react";
import HighLightSpan from "../atoms/HighlightSpan/HighLightSpan";
import FeedbackCard from "../molecules/FeedbackCard/FeedbackCard";

import PassIcon from "../atoms/PassIcon/PassIcon";

type Feedback = {
  name: string;
  country: string;
  content: string;
};

type FeedbackLangContent = {
  title: string;
  subtitle: string;
  imageUrl: string;
  feedbacks: Feedback[];
};

type Props = {
  id:string;
  lang:string;
  content:FeedbackLangContent;
};



const Feedback: React.FC<Props> = ({ id,lang,content }) => {
  

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

 if (!content || !content.feedbacks || content.feedbacks.length === 0) {
    return null;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + visibleCount >= content.feedbacks.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [content.feedbacks.length]);

  const handleDotClick = (index: number) => setStartIndex(index);
  const handleNext = () => {
    if (startIndex + visibleCount < content.feedbacks.length) {
      setStartIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleCards = content.feedbacks.slice(
    startIndex,
    startIndex + visibleCount
  );
  const totalDots = Math.max(content.feedbacks.length - visibleCount + 1, 1);


  return (
    <div className="w-[1300px] h-[615px] m-auto items-center max-w-full max-[1335px]:w-[90%] max-[1335px]:max-w-[1100px] max-[1335px]:h-auto">
      <div className="mt-[50px] flex justify-center items-center gap-[50px] max-[1335px]:gap-[30px] max-[1024px]:flex-col max-[1024px]:gap-[20px]">
        <img
          src={content.imageUrl}
          alt="photo"
          className="w-[526px] h-[413px] rounded-[24px] max-[1335px]:h-auto max-[1335px]:w-[480px]"
        />
        <div className="mt-[-50px] ml-[50px] max-[1335px]:ml-0 max-[1335px]:w-auto">
          <h4 className="text-[#eb6f2d] text-[18px] font-normal -mt-[100px] max-[1335px]:text-[16px] max-[1024px]:text-center max-[1024px]:mt-[50px]">
           {content.title}
          </h4>
          <h3 className="w-[708px] h-[166px] text-[55px] font-medium max-[1335px]:w-auto max-[1335px]:text-[40px] max-[1024px]:text-[28px] max-[1024px]:text-center max-[768px]:text-[20px]">
            <HighLightSpan>500+</HighLightSpan> {content.subtitle.replace("500+", "").trim()}
          </h3>
        </div>
      </div>
      {content.feedbacks.length > 0 && (
        <div
          className={`flex justify-center items-center gap-[50px] mt-[-100px] ${lang=='ar'?"pr-[300px] ":"pl-[300px] "} 
        max-[1335px]: ${lang=='ar'?"pr-0 ":"pl-[100px] "} 
        max-[1024px]:pl-[0] max-[1024px]:pr-[0] max-[1024px]:flex-col max-[768px]:w-auto max-[768px]:h-auto`}
        >
          {visibleCards.map((fb, i) => (
          <FeedbackCard
            key={startIndex + i}
            name={fb.name}
            country={fb.country}
            content={fb.content}
            lang={lang}
          />
        ))}
        </div>
      )}

      <div className="mt-[20px] flex justify-center items-center gap-[10px] ">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-[17px] h-[17px] rounded-full cursor-pointer transition-all duration-300 ${
              i === startIndex ? "bg-[#eb6f2d] scale-110" : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>
      <div className="mt-[-200px] max-[1335px]:mt-0 max-[1024px]:mt-[30px] max-[768px]:mt-[20px] flex justify-start items-center max-[1024px]:justify-center">
        <div
          onClick={handlePrev}
          className={`w-[64px] h-[64px] border border-[#eb6f2d] rounded-full flex items-center justify-center cursor-pointer ${
            startIndex === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <PassIcon direction={`${lang=='ar'?"right":"left"}`} />
        </div>

        <div
          onClick={handleNext}
          className={`w-[64px] h-[64px] border border-[#eb6f2d] rounded-full flex items-center justify-center cursor-pointer${
            startIndex + visibleCount >= content.feedbacks.length
              ? " opacity-50 pointer-events-none"
              : ""
          }`}
        >
          <PassIcon direction={`${lang=='ar'?"left":"right"}`} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
