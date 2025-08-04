import { FaCreditCard } from "react-icons/fa";
import Price from "../../atoms/Price/Price";
import FeatureItem from "../FeatureItem/FeatureItem";

type Props = {
  title: string;
  price: string;
  lang:string;
  features: string[];
};

const PackageCard: React.FC<Props> = ({ title, price, features,lang }) => (
  <div
    className="
      h-[400px] w-[370px] border border-[#e6e6e6] rounded-3xl pt-10
      flex flex-col justify-between
      max-[1335px]:w-[320px] max-[1024px]:w-full max-[1024px]:max-w-[350px] max-[768px]:w-auto
    "
  >
    <div className={`flex items-center gap-2.5  ${lang=='ar'?"pr-5":"pl-5"}`}>
      <div className="flex justify-center items-center h-[50px] w-[48px] border border-[#e6e6e6] rounded-xl">
        <i className="fab fa-cc-visa">{FaCreditCard({})}</i>
      </div>
      <h4 className="text-[24px] font-bold max-[1335px]:text-[22px]">{title}</h4>
    </div>

    <Price value={price}  />

    <hr className="border-t border-[#ededed]" />

    <ul className={`${lang=='ar'?"pr-5":"pl-5"} pt-5 my-5 max-[1024px]:pl-4 max-[1024px]:pt-4`}>
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </ul>

    <button
      className={`
        w-[275px] h-[40px] bg-[#eb6f2d] text-white border-none font-bold cursor-pointer
        rounded-lg px-5 py-3 ${lang=='ar'?"mr-5":"ml-5"} mb-5
        max-[1335px]:w-[85%] max-[1024px]:w-[90%] max-[1024px]:ml-2.5 max-[1024px]:mb-4
        max-[768px]:w-[90%] max-[768px]:h-auto
      `}
    >
      {`${lang=='ar'?"اختر الباقة":"CHOOSE PACKAGE"}`}
    </button>
  </div>
);

export default PackageCard;
