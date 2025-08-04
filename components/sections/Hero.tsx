"use client";

import CardWithImage from "../molecules/CardWithImage/CardWithImage";
import Tab from "../molecules/Tab/Tab";

type TabData = { label: string; lighted?: boolean };
type CardData = { title: string; imageUrl: string };

type HeroSectionContent = {
  heading: string;
  highlightWords: string[];
  tabs: TabData[];
  cards: CardData[];
  
};

type HeroSectionProps = {
  id: string;
  urlImage:string;
  content: HeroSectionContent;
  lang: string;
};

const Hero: React.FC<HeroSectionProps> = ({ id, content,urlImage, lang }) => {
  

  const renderHeading = () => {
    return content.heading.split(" ").map((word, idx) => {
      const cleanWord = word.replace(/[^a-zA-Z\u0600-\u06FF]/g, "");
      const isHighlighted = content.highlightWords.includes(cleanWord);
      return (
        <span key={idx} className={isHighlighted ? "text-[#eb6f2d]" : ""}>
          {word + " "}
        </span>
      );
    });
  };
  console.log("Hero Data:",content);
  console.log("Hero Data urlImage:",urlImage);

  return (
    <div
      className={`max-w-[1296px] justify-center items-center m-auto flex  gap-[50px] mt-[20px] h-auto max-[1335px]:flex-col`}
    >
      <section
        id={id} 
        className={`
        flex flex-col gap-5 max-h-[600px]
        px-0 max-[1335px]:px-10 max-[1024px]:px-5
        items-start max-[1335px]:items-center max-[1024px]:items-center
      `}
      >
        <div className="w-[662px] h-[294px] mb-[50px] max-[1335px]:w-[90%] max-[1335px]:text-center max-[768px]:w-full">
          <h1
            className={`
            text-[#353232] text-[65px] font-medium
            max-[1335px]:text-[56px] max-[1335px]:text-center leading-[1.2]
            max-[1024px]:text-[48px] max-[768px]:text-[36px] max-[768px]:text-center 
          `}
          >
            {renderHeading()}
          </h1>
        </div>

        <div
          className={`
          h-[40px] flex gap-[30px]
          max-[1335px]:gap-[25px] max-[1335px]:justify-center max-[1335px]:flex-wrap
          max-[1024px]:gap-[20px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:h-auto
        `}
        >
          {content.tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              lighted={tab.lighted}
              lang={lang}
            />
          ))}
        </div>

        <div
          className={`
          flex h-[400px] mt-5 gap-2
          max-[1335px]:justify-center max-[1335px]:gap-[30px] max-[1335px]:h-auto
          max-[1024px]:flex-wrap max-[1024px]:gap-[20px]
          max-[768px]:flex-col max-[768px]:w-full max-[768px]:items-center max-[768px]:mb-[150px]
        `}
        >
          {content.cards.map((card, index) => (
            <CardWithImage
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              lang={lang}
            />
          ))}
        </div>
      </section>
      <section
        id={id}
        className={`
        flex justify-center items-center
        max-[1335px]:px-[100px]
        max-[1024px]:px-[20px]
        max-[768px]:flex-col max-[768px]:px-[15px] max-[768px]:mt-[200px]
        max-[480px]:px-[10px]
        max-[320px]:px-[8px]
      `}
      >
        <img
          src={urlImage}
          alt="Large"
          className={`
          max-w-[550px] h-[719px] rounded-[50px] 
          max-[1335px]:max-w-[480px] max-[1335px]:h-auto max-[1335px]:rounded-[40px] max-[1335px]:mt-[0px]
          max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:rounded-[30px] max-[1024px]:mt-0
          max-[768px]:w-full max-[768px]:h-auto max-[768px]:rounded-[24px]
          max-[480px]:rounded-[20px]
          max-[320px]:rounded-[16px]
        `}
        />
      </section>
    </div>
  );
};

export default Hero;
