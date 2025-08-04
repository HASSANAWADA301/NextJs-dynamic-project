"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../molecules/ServiceCard/ServiceCard";
import SectionTitle from "../atoms/SectionTitle/SectionTitle";
import SectionParagraph from "../atoms/SectionParagraph/SectionParagraph";
import VideoPreview from "../molecules/VideoPreview/VideoPreview";

type Service = {
  title: string;
  description: string;
  colored: boolean;
};

type TranslatedContent = {
  title: string;
  highlight: string;
  paragraph: string;
  services: Service[];
};

type Props = {
  id: string;
  lang: string;
  imageUrl: string;
  videoUrl: string;
  content: TranslatedContent;
};

const Services: React.FC<Props> = ({
  id,
  lang,
  content,
  imageUrl,
  videoUrl,
}) => {
  const section = content;

  return (
    <div
      className="w-full max-w-[1284px] h-[657px] m-auto perspective-[2000px] transform-3d
  max-[1335px]:flex-col max-[1335px]:h-auto max-[1335px]:items-center max-[1335px]:justify-center max-[1335px]:w-[100%] max-[1335px]:rounded-[20px] max-[1335px]:perspective-[0px] max-[1335px]:transform-none max-[1335px]:bg-[#f5f5f5]"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5] rounded-[100px] rotate-y-[7deg] origin-left z-[0] 
    max-[1335px]:hidden"
      ></div>
      <section
      id={id}
        className="m-auto relative z-[1] mb-[50px] mt-[100px] max-w-[1284px] h-[657px] w-full rounded-[100px] flex justify-arouned
  max-[1335px]:flex-col max-[1335px]:items-center max-[1335px]:justify-center max-[1335px]:w-[100%] max-[1335px]:h-auto  max-[1335px]:rounded-[20px] max-[1335px]:perspective-[0px] max-[1335px]:transform-none max-[1335px]:bg-[#f5f5f5]"
      >
        <div
          className={`flex flex-col justify-center items-center gap-[30px] relative  ${
            lang == "ar" ? "right-[100px]" : "left-[50px]"
          }  
       max-[1335px]:static max-[1335px]:left-0 max-[1335px]:mb-[50px]`}
        >
          <SectionTitle text={section.title} highlight={section.highlight} />
          <SectionParagraph>{section.paragraph}</SectionParagraph>
          <VideoPreview imageUrl={imageUrl} videoUrl={videoUrl} lang={lang} />
        </div>

        <div
          className={`absolute flex gap-8  ${
            lang == "ar" ? "left-[200px]" : "right-[200px]"
          }  top-[30px] max-[1335px]:flex-col max-[1335px]:static`}
        >
          <div className="flex flex-col justify-center gap-[50px]">
            {section.services.slice(0, 2).map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                colored={service.colored}
                lang={lang}
              />
            ))}
          </div>

          <div className="flex flex-col justify-center">
            {section.services.slice(2).map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                colored={service.colored}
                className="-mt-[300px] md:mt-0"
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
