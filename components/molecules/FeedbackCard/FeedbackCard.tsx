import { FaUser } from "react-icons/fa";

type Props = {
  name: string;
  country: string;
  content: string;
  lang:string;
};

const FeedbackCard: React.FC<Props> = ({ name, country, content,lang }) => (
  <div
    className="
      w-[456px] h-[297px] max-w-full bg-white border border-[#e6e6e6] 
      rounded-[24px] flex flex-col justify-between
      max-[768px]:w-[100%]
    "
  >
    <div className="text-[#dedede] text-center text-[150px] w-[100px] h-[50px]  ">
      "
    </div>
    <p
      className={`
        w-[406px] h-[63px] text-[14px] font-medium text-[#838383] ${lang=='ar'?"pr-[25px]":"pl-[25px]"} 
        max-[768px]:w-auto
      `}
    >
      {content}
    </p>
    <hr className="border-t border-[#ededed]" />
    <div className={`flex items-center pb-[10px] ${lang=='ar'?"pr-[25px]":"pl-[25px]"} mt-[-50px]`}>
      <i className="w-[48px] h-[48px] text-center text-[#151313]">
        <FaUser size="100%" />
      </i>
      <div className="ml-4">
        <h4 className="text-[16px] font-bold text-[#151313] m-0">
          {name}
        </h4>
        <h6 className="text-[16px] font-normal text-[#838383] mt-[2px]">
          {country}
        </h6>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
