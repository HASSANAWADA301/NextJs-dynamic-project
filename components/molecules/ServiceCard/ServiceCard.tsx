import React from "react";
import PlayIcon from "../../atoms/PlayIcon/PlayIcon";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  colored?: boolean;
  className?: string;
  lang:string;
}> = ({ title, description, colored, className,lang }) => {
  const baseClasses = `
    flex flex-col w-[251px] h-[273px] rounded-[50px] ${lang=='ar'?"pr-[30px]":"pl-[30px]"} pt-[20px] text-white gap-[20px]
    max-[1335px]:w-4/5 max-[1335px]:h-auto max-[1335px]:p-6 max-[1335px]:mx-auto max-[1335px]:rounded-[30px]
    max-[1024px]:w-[90%] max-[1024px]:p-5 max-[1024px]:rounded-[20px]
    max-[768px]:w-[90%] max-[768px]:p-5 max-[768px]:rounded-[20px]
    max-[480px]:w-[95%] max-[480px]:p-4 max-[480px]:rounded-[20px]
    max-[320px]:p-3 max-[320px]:rounded-[16px]
  `;

  const coloredStyle = `bg-[#eb6f2d] mt-[-100px] max-[1335px]:mt-0`;
  const nonColoredStyle = `w-[210px] h-[219px] mt-[50px] text-[#797979]`;

  return (
    <div
      className={`
        ${colored ? `${baseClasses} ${coloredStyle}` : `${baseClasses} ${nonColoredStyle}`} 
        ${className || ""}
      `}
    >
      <div
        className="
          rounded-full bg-white text-[#eb6f2d] w-[58px] h-[59px] flex items-center justify-center
          max-[1335px]:w-[52px] max-[1335px]:h-[52px] max-[1335px]:text-sm
          max-[1024px]:mb-[15px] max-[480px]:w-[45px] max-[480px]:h-[45px] max-[480px]:text-[13px]
          max-[320px]:w-[40px] max-[320px]:h-[40px] max-[320px]:text-[12px]
        "
      >
        <PlayIcon className={`${lang=='ar'?"rotate-180":""}`}/>
      </div>
      <h6
        className={`
          font-semibold text-[16px]
          ${colored ? 'text-[white]':'text-[black]'} 
          max-[1335px]:text-[17px] 
          max-[1024px]:text-[16px]
          max-[480px]:text-[15px] max-[320px]:text-[14px]
        `}
      >
        {title}
      </h6>
      <p
        className={`
          text-[14px] w-[194px] h-[84px]
          ${colored ? "text-white" : "text-[#797979]"}
          max-[1335px]:text-[15px] max-[1335px]:w-full max-[1335px]:h-auto
          max-[1024px]:text-[14px] max-[1024px]:w-full max-[1024px]:h-auto
          max-[480px]:text-[13px] max-[320px]:text-[12px]
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
