import { FaArrowRight, FaPlus } from "react-icons/fa";
import IconButton from "../../atoms/IconButton/IconButton";

type Props = {
  label: string;
  lighted?: boolean;
  lang:string;
};

const Tab: React.FC<Props> = ({ label, lighted,lang }) => (
  <div
    className={`
      flex items-center justify-around rounded-[24px] h-[40px]
      ${
        lighted
          ? "w-[250px]   bg-white border border-[#eeeeee] "
          : "bg-[#f3f3f3]"
          
       }
      
      w-[210px] max-[1335px]:w-[180px] max-[1024px]:w-[160px] max-[768px]:w-full max-[480px]:h-[36px] max-[320px]:h-[34px] px-[10px]
   
      `}
  >
    <p
      className={`
        font-medium text-[#353232] pl-[0px]
        text-[14px] max-[1335px]:text-[13px] max-[1024px]:text-[12.5px] max-[768px]:text-[12px] max-[480px]:text-[11.5px] max-[320px]:text-[11px]
        max-[480px]:pl-[10px] max-[320px]:pl-[8px]
      `}
    >
      {label}
    </p>

    {lighted && (
      <div className={`flex items-center justify-between gap-1  ${lang=='ar'?"mr-0 ml-[-40px] max-[1335px]:mr-[0px] max-[1335px]:ml-auto":"mr-2 ml-auto"} `}>
        {[1, 2, 3].map((_, i) => (
          <i
            key={i}
            className="flex justify-center items-center w-[32px] h-[32px] bg-[#c4c1c1] rounded-full rotate-[-45deg]
                       max-[1335px]:w-[30px] max-[1335px]:h-[30px]
                       max-[1024px]:w-[28px] max-[1024px]:h-[28px]
                       max-[480px]:w-[26px] max-[480px]:h-[26px]
                       max-[320px]:w-[24px] max-[320px]:h-[24px]
                       mr-[-15px]"
          />
        ))}
      </div>
    )}

    {lighted && (
      <IconButton
        Icon={FaPlus}
        className={`
    flex justify-center items-center rounded-full 
    w-[32px] h-[32px]
    
    max-[1335px]:w-[30px] max-[1335px]:h-[30px]
    max-[1024px]:w-[28px] max-[1024px]:h-[28px]
    max-[480px]:w-[26px] max-[480px]:h-[26px]
    max-[320px]:w-[24px] max-[320px]:h-[24px]
    ${lighted ? "bg-[#ebe7e7] text-gray-500" : "bg-white"}
  `}
      />
    )}
    {!lighted && (
      <IconButton
        Icon={FaArrowRight}
        className={`
    flex justify-center items-center rounded-full rotate-[-45deg] bg-white 
    w-[32px] h-[32px]
    max-[1335px]:w-[30px] max-[1335px]:h-[30px]
    max-[1024px]:w-[28px] max-[1024px]:h-[28px]
    max-[480px]:w-[26px] max-[480px]:h-[26px]
    max-[320px]:w-[24px] max-[320px]:h-[24px]
    
  `}
      />
    )}
  </div>
);

export default Tab;
