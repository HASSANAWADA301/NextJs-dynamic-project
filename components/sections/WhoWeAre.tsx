"use client";

import { useTranslation } from "react-i18next";
import BulletedText from "../atoms/BulletedText/BulletedText";
import HighLightSpan from "../atoms/HighlightSpan/HighLightSpan";

type TranslatedContent = {
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
};

type Props = {
  id: string;
  lang: string;
  imageUrl: string;
  content: TranslatedContent;
};

const WhoWeAre: React.FC<Props> = ({
  id,
  lang,
  imageUrl,
  content,
}) => {
  return (
    <div
      className="max-w-[1300px] h-[572px] flex gap-[100px] items-center 
        max-[1335px]:w-full max-[1335px]:h-auto max-[1335px]:px-[40px] max-[1335px]:gap-[60px] max-[1335px]:flex-col 
        max-[1024px]:w-full max-[1024px]:h-auto 
        max-[768px]:w-full max-[768px]:h-auto max-[480px]:px-[20px]"
    >
      <div
        className={`absolute ${
          lang === "ar" ? "right-0 rotate-180" : "left-0"
        } w-[627px] h-[572px] border border-[#EB6F2D] rounded-r-[300px] -z-[1] 
          max-[1335px]:h-[500px] max-[1335px]:rounded-[150px] max-[1335px]:w-full 
          max-[1024px]:w-full max-[1024px]:h-[300px] 
          max-[768px]:w-full max-[768px]:h-[300px] max-[768px]:rounded-[150px]`}
      ></div>

      <div className="flex justify-around m-0 max-[1024px]:w-full ">
        <img
          src={imageUrl}
          alt="Who we are"
          className="rounded-[30px] w-[639px] h-[421px] ml-[50px] 
            max-[1335px]:w-[90%] max-[1335px]:ml-[0px] max-[1335px]:h-[500px] 
            max-[1024px]:ml-0 max-[1024px]:mt-[75px] max-[1024px]:rounded-[20px] 
            max-[768px]:w-[90%] max-[768px]:mt-[75px] max-[768px]:rounded-[20px] 
            max-[480px]:w-full max-[480px]:mt-[50px] max-[480px]:rounded-[16px] 
            max-[320px]:rounded-[12px]"
        />
      </div>

      <div
        className={`flex flex-col gap-[50px] m-auto ${
          lang === "ar" ? "text-right" : "text-left"
        } 
          max-[1335px]:w-auto max-[1335px]:h-auto 
          max-[1024px]:text-center max-[1024px]:items-center 
          max-[768px]:text-center`}
      >
        <h1
          className={`${
            lang === "fr" ? "text-[50px]" : "text-[75px]"
          } w-[588px] h-[113px] font-medium text-[#353232] 
            ${lang === "ar" ? "text-right" : "text-left"} 
            max-[1335px]:text-[48px] max-[1335px]:text-center max-[1335px]:w-auto
            max-[1024px]:text-[32px] max-[1024px]:h-auto
            max-[768px]:text-[24px] max-[480px]:text-[20px] max-[320px]:text-[18px]`}
        >
          <HighLightSpan>{content.highlight} </HighLightSpan>
          {content.title.replace(content.highlight, "").trim()}
        </h1>

        <h6
          className="mt-[-50px] w-[521px] h-[72px] text-[16px] font-normal text-[#797979] 
            max-[1335px]:text-[15px] max-[1335px]:text-center max-[1335px]:w-auto 
            max-[1024px]:text-[14px] max-[1024px]:mx-auto max-[1024px]:mt-[-20px] 
            max-[768px]:text-[14px] max-[768px]:mx-auto max-[768px]:mt-[-20px] 
            max-[480px]:text-[13px] max-[480px]:mt-[-10px] max-[320px]:text-[12px]"
        >
          {content.description}
        </h6>

        <ul
          className="list-none pl-0 text-[14px] text-[#797979] text-left flex flex-col items-start justify-start gap-[10px] 
            max-[1335px]:w-auto max-[1335px]:h-auto max-[1335px]:items-center 
            max-[1024px]:text-center max-[1024px]:text-[12px] 
            max-[768px]:items-center max-[768px]:text-center 
            max-[480px]:text-[11px] max-[480px]:gap-[8px] max-[320px]:text-[12px]"
        >
          {content.bullets.map((text, i) => (
            <BulletedText key={i}>{text}</BulletedText>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhoWeAre;
