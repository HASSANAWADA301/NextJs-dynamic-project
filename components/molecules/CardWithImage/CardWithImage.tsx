import React from "react";
import { FaArrowRight } from "react-icons/fa";
import IconButton from "../../atoms/IconButton/IconButton";

type Props = {
  title: string;
  imageUrl: string;
  lang:string;
};

const CardWithImage: React.FC<Props> = ({ title, imageUrl,lang }) => (
  <div
    className={`
      bg-[#f6f6f6] rounded-[40px] text-left p-5 max-h-[237px] max-w-[345px]
      max-[1335px]:max-w-[300px] max-[1024px]:max-w-[280px]
      max-[768px]:w-[90%] max-[480px]:w-full max-[480px]:rounded-[24px]
      max-[320px]:rounded-[20px] max-[320px]:p-3
    `}
  >
    <h4
      className={`
        text-[20px] font-semibold mb-2 w-[202px]
        max-[1335px]:text-[16px] max-[1335px]:w-[60%]
        max-[1024px]:text-[17px] max-[1024px]:w-full max-[1024px]:mb-5
        max-[768px]:text-[16px]
        max-[480px]:text-[15px] max-[320px]:text-[14px] max-[320px]:mb-3
        ${lang=="ar"?"text-right pl-0":""}
        ${lang=="fr"?"w-[300px]":""}
      `}
    >
      {title}
    </h4>

    <div
      className={`
        flex items-center justify-between gap-[100px]
        max-[1335px]:gap-[60px]  max-[1024px]:gap-[40px] max-[1024px]:mt-[60px] 
        max-[768px]:justify-around max-[768px]:gap-0
        max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:text-center max-[480px]:mt-[0px]
        max-[320px]:gap-3
         ${lang=="fr"?"mt-[20px] max-[1024px]:mt-0":""}
      `}
    >
      <IconButton
        Icon={FaArrowRight}
        className={`
          bg-black text-white rounded-full w-[52px] h-[52px] rotate-[-45deg]
          flex justify-center items-center
          max-[1335px]:w-[48px] max-[1335px]:h-[48px]
          max-[1024px]:w-[44px] max-[1024px]:h-[44px]
          max-[768px]:w-[42px] max-[768px]:h-[42px]
          max-[480px]:w-[38px] max-[480px]:h-[38px] max-[480px]:text-[14px]
          max-[320px]:w-[32px] max-[320px]:h-[32px] max-[320px]:text-[12px]
        ${lang=="ar"?"mt-[80px] max-[1024px]:mt-0":""}
       
        `}
      />

      <img
        src={imageUrl}
        alt={title}
        className={`
          w-[148px] h-[165px] rounded-[24px] object-cover transition-all duration-200
          hover:animate-bounceY
          max-[1335px]:w-[130px] max-[1335px]:h-[150px]
          max-[1024px]:w-[120px] max-[1024px]:h-[140px]
          max-[768px]:w-[110px] max-[768px]:h-[130px]
          max-[480px]:w-[100px] max-[480px]:h-[120px] max-[480px]:rounded-[16px]
          max-[320px]:w-[90px] max-[320px]:h-[110px]
          -mt-[50px]
          
        `}
      />
    </div>
  </div>
);

export default CardWithImage;
