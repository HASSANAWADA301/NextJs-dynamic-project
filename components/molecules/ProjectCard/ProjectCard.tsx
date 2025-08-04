import { FaArrowRight } from "react-icons/fa";
import IconButton from "../../atoms/IconButton/IconButton";

type Props = {
  title: string;
  description: string;
  offset?: boolean;
  lang:string;
};

const ProjectCard: React.FC<Props> = ({ title, description, offset,lang }) => (
  <div
    className={`
      bg-[#c4c4c4] bg-gradient-to-b from-[#00000000] to-black 
      rounded-[24px] 
      w-[310px] h-[345px]
      ${offset ? 'mt-[-100px] max-[768px]:mt-0 max-[480px]:mt-[10px] max-[320px]:mt-[20px]' : ''}
      max-[480px]:w-[200px] max-[480px]:h-[260px]
      max-[320px]:w-[180px] max-[320px]:h-[230px]
    `}
  >
    <h3
      className={`
        mt-[220px] text-white text-[16px] font-bold ${lang=='ar'?"text-right mr-[20px]":"text-left ml-[20px]"} 
        max-[480px]:mt-[160px] max-[480px]:text-[12px]
        max-[320px]:mt-[140px] max-[320px]:text-[11px]
      `}
    >
      {title}
    </h3>
    <div
      className="
         flex justify-center items-center gap-[50px]
      "
    >
      <p
        className="
          text-white text-left text-[14px] font-normal h-[63px] w-[198px]
          max-[480px]:text-[11px] max-[480px]:w-[85%]
          max-[320px]:text-[10px] max-[320px]:w-[80%]
        "
      >
        {description}
      </p>
      <i className="text-white w-[16px] h-[16px]">
        <IconButton Icon={FaArrowRight} className={`${lang=='ar'?"rotate-180":""}`} />
      </i>
    </div>
  </div>
);

export default ProjectCard;
