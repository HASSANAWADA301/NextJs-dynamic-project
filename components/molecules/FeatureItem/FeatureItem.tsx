import { FaCheckCircle } from "react-icons/fa";
import IconButton from "../../atoms/IconButton/IconButton";

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <li
    className="
      my-2 text-[15px] text-[#353232] list-none
      flex items-center mr-2.5
    "
  >
    <div className="mr-2.5">
      <IconButton Icon={FaCheckCircle} />
    </div>
    {text}
  </li>
);

export default FeatureItem;
