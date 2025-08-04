
type props = {
  value: string;
};

const Price: React.FC<props> = ({ value }) => (
  <div className="w-[180px] h-[48px] mt-[-20px] text-center ml-[10px]">
    <span className="text-[32px] italic font-[300]">{value}</span>
    
  </div>
);
export default Price;
